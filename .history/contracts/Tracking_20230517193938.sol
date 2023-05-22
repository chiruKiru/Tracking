//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tracking{
    enum FundStatus {PENDING, STATE, CENTRAL,REJECTED}

    struct Fund {
        address sender;
        address receiver;
        uint256 Req_Date;
        uint256 deliveryTime;
        uint256 from;
        uint256 amount;
        string image;
        FundStatus status;
        bool isPaid;
        string feedback;
    }
    mapping(address => Fund[]) public funds;
    uint256 public fundCount;

    struct TypeFund{
        address sender;
        address receiver;
        uint256 Req_Date;
        uint256 deliveryTime;
        uint256 from;
        uint256 amount;
        string image;
        FundStatus status;
        bool isPaid;
        string feedback;
    }
    TypeFund[] typeFunds;

    event FundCreated(address indexed sender, address indexed receiver, uint256 req_date, uint256 from, uint256 amount,string image);
    event FundState(address indexed sender, address indexed receiver, uint256 req_date);
    event FundRejected(address indexed sender, address indexed receiver,string feedback);
    event FundCentral(address indexed sender, address indexed receiver, uint256 deliveryTime);
    event FundPaid(address indexed sender, address indexed receiver, uint256 amount);

    constructor(){
        fundCount = 0;
    }

    function createFund(address _receiver, uint256 _req_date, uint256 _from, uint256 _amount,string memory image,string memory feedback) public {
            //require(msg.value == _amount,"Payment amount must match the amount");   

            Fund memory fund = Fund(msg.sender, _receiver, _req_date, 0, _from, _amount, image, FundStatus.PENDING, false,feedback);

            funds[msg.sender].push(fund);
            fundCount ++;

            typeFunds.push(
                TypeFund(
                    msg.sender, 
                    _receiver,
                     _req_date,
                      0, 
                      _from, 
                      _amount, 
                      image,
                      FundStatus.PENDING,
                    false,
                    feedback
                )
            );

            emit FundCreated(msg.sender, _receiver, _req_date, _from, _amount,image);
    }


    function startFund(address _sender,address _receiver, uint256 _index) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status == FundStatus.PENDING,'Fund already in transit.');


        fund.status = FundStatus.STATE;
        typeFund.status = FundStatus.STATE;

        emit FundState(_sender, _receiver, fund.Req_Date);
    }

    function RejectFund(address _sender,address _receiver, uint256 _index,string memory _feedback) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status == FundStatus.PENDING || fund.status == FundStatus.STATE,'Fund already Rejected.');

      
        fund.status = FundStatus.REJECTED;
        typeFund.status = FundStatus.REJECTED;

        fund.feedback = _feedback;
        typeFund.feedback = _feedback;


        emit FundRejected(_sender, _receiver,_feedback);
    }



    function centralFund(address _sender, address _receiver, uint256 _index) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status != FundStatus.Re  ,'Fund not in transit.');
        require(!fund.isPaid, "Fund already paid");

        fund.status = FundStatus.CENTRAL;
        typeFund.status = FundStatus.CENTRAL;
        typeFund.deliveryTime = block.timestamp;
        fund.deliveryTime = block.timestamp;

        uint256 amount = fund.amount;

        payable(fund.sender).transfer(amount);

        fund.isPaid = true;
        typeFund.isPaid = true;

        emit FundCentral(_sender, _receiver, fund.deliveryTime);
        emit FundPaid(_sender, _receiver, amount);
    }

    function getFund(address _sender,uint256 _index) public view returns (address , address,uint256,uint256, uint256 ,uint256,string memory ,string memory, FundStatus, bool){
        Fund storage fund = funds[_sender][_index];
        return (fund.sender,fund.receiver,fund.Req_Date,fund.deliveryTime,fund.from,fund.amount,fund.image, fund.feedback,fund.status,fund.isPaid);

    }

    function getFundCount(address _sender) public view returns (uint256) {
        return funds[_sender].length;
    }

    function getAllTransactions()
    public view returns(TypeFund[] memory){
        return typeFunds;
    }
}