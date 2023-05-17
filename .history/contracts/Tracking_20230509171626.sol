//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tracking{
    enum FundStatus {PENDING, STATE, CENTRAL}

    struct Fund {
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        FundStatus status;
        bool isPaid;
    }
    mapping(address => Fund[]) public Funds;
    uint256 public FundCount;

    struct TypeFund{
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        FundStatus status;
        bool isPaid;
    }
    TypeFund[] typeFunds;

    event FundCreated(address indexed sender, address indexed receiver, uint256 pickuptime, uint256 distance, uint256 price);
    event FundState(address indexed sender, address indexed receiver, uint256 pickuptime);
    event FundCentral(address indexed sender, address indexed receiver, uint256 deliveryTime);
    event FundPaid(address indexed sender, address indexed receiver, uint256 amount);

    constructor(){
        FundCount = 0;
    }

    function createFund(address _receiver, uint256 _pickupTime, uint256 _distance, uint256 _price) public {
            //require(msg.value == _price,"Payment amount must match the price");   

            Fund memory Fund = Fund(msg.sender, _receiver, _pickupTime, 0, _distance, _price, FundStatus.PENDING, false);

            Funds[msg.sender].push(Fund);
            FundCount ++;

            typeFunds.push(
                TypeFund(
                    msg.sender, 
                    _receiver,
                     _pickupTime,
                      0, 
                      _distance, 
                      _price, 
                      FundStatus.PENDING,
                    false
                )
            );

            emit FundCreated(msg.sender, _receiver, _pickupTime, _distance, _price);
    }


    function startFund(address _sender,address _receiver, uint256 _index) public {
        Fund storage Fund = Funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(Fund.receiver == _receiver,'Invalid receiver');
        require(Fund.status == FundStatus.PENDING,'Fund already in transit.');


        Fund.status = FundStatus.STATE;
        typeFund.status = FundStatus.STATE;

        emit FundState(_sender, _receiver, Fund.pickupTime);
    }



    function completeFund(address _sender, address _receiver, uint256 _index) public {
        Fund storage Fund = Funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];

        require(Fund.receiver == _receiver,'Invalid receiver');
        require(Fund.status == FundStatus.STATE,'Fund not in transit.');
        require(!Fund.isPaid, "Fund already paid");

        Fund.status = FundStatus.CENTRAL;
        typeFund.status = FundStatus.CENTRAL;
        typeFund.deliveryTime = block.timestamp;
        Fund.deliveryTime = block.timestamp;

        uint256 amount = Fund.price;

        payable(Fund.sender).transfer(amount);

        Fund.isPaid = true;
        typeFund.isPaid = true;

        emit FundCentral(_sender, _receiver, Fund.deliveryTime);
        emit FundPaid(_sender, _receiver, amount);
        
    }

    function getFund(address _sender,uint256 _index) public view returns (address , address,uint256,uint256, uint256 ,uint256, FundStatus, bool){
         Fund storage Fund = Funds[_sender][_index];
         return (Fund.sender,Fund.receiver,Fund.pickupTime,Fund.deliveryTime,Fund.distance,Fund.price,Fund.status,Fund.isPaid);

    }

    function getFundCount(address _sender) public view returns (uint256) {
        return Funds[_sender].length;
    }

    function getAllTransactions()
    public view returns(TypeFund[] memory){
        return typeFunds;
    }
}