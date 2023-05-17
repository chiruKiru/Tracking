//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tracking{
    enum FundStatus {PENDING, STATE, CENTRAL,REJECTED}

    struct Fund {
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
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
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        string image;
        FundStatus status;
        bool isPaid;
        string feedback;
    }
    TypeFund[] typeFunds;

    event FundCreated(address indexed sender, address indexed receiver, uint256 pickuptime, uint256 distance, uint256 price,string image);
    event FundState(address indexed sender, address indexed receiver, uint256 pickuptime);
    event FundRejected(address indexed sender, address indexed receiver);
    event FundCentral(address indexed sender, address indexed receiver, uint256 deliveryTime);
    event FundPaid(address indexed sender, address indexed receiver, uint256 amount);

    constructor(){
        fundCount = 0;
    }

    function createFund(address _receiver, uint256 _pickupTime, uint256 _distance, uint256 _price,string memory image,string memory feedback) public {
            //require(msg.value == _price,"Payment amount must match the price");   

            Fund memory fund = Fund(msg.sender, _receiver, _pickupTime, 0, _distance, _price, image, FundStatus.PENDING, false,feedback);

            funds[msg.sender].push(fund);
            fundCount ++;

            typeFunds.push(
                TypeFund(
                    msg.sender, 
                    _receiver,
                     _pickupTime,
                      0, 
                      _distance, 
                      _price, 
                      image,
                      FundStatus.PENDING,
                    false,
                    feedback
                )
            );

            emit FundCreated(msg.sender, _receiver, _pickupTime, _distance, _price,image);
    }


    function startFund(address _sender,address _receiver, uint256 _index) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status == FundStatus.PENDING,'Fund already in transit.');


        fund.status = FundStatus.STATE;
        typeFund.status = FundStatus.STATE;

        emit FundState(_sender, _receiver, fund.pickupTime);
    }

    function RejectedFund(address _sender,address _receiver, uint256 _index, string memory feedback) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status == FundStatus.REJECTED,'Fund already in transit.');

        fun

        fund.status = FundStatus.REJECTED;
        typeFund.status = FundStatus.REJECTED;

        emit FundRejected(_sender, _receiver);
    }



    function completeFund(address _sender, address _receiver, uint256 _index) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status == FundStatus.STATE,'Fund not in transit.');
        require(!fund.isPaid, "Fund already paid");

        fund.status = FundStatus.CENTRAL;
        typeFund.status = FundStatus.CENTRAL;
        typeFund.deliveryTime = block.timestamp;
        fund.deliveryTime = block.timestamp;

        uint256 amount = fund.price;

        payable(fund.sender).transfer(amount);

        fund.isPaid = true;
        typeFund.isPaid = true;

        emit FundCentral(_sender, _receiver, fund.deliveryTime);
        emit FundPaid(_sender, _receiver, amount);
    }

    function getFund(address _sender,uint256 _index) public view returns (address , address,uint256,uint256, uint256 ,uint256,string memory , FundStatus, bool){
        Fund storage fund = funds[_sender][_index];
        return (fund.sender,fund.receiver,fund.pickupTime,fund.deliveryTime,fund.distance,fund.price,fund.image,fund.status,fund.isPaid);

    }

    function getFundCount(address _sender) public view returns (uint256) {
        return funds[_sender].length;
    }

    function getAllTransactions()
    public view returns(TypeFund[] memory){
        return typeFunds;
    }
}