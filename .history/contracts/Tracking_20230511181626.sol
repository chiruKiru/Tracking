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
        address image,
        FundStatus status;
        bool isPaid;
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
        address image;
        FundStatus status;
        bool isPaid;
    }
    TypeFund[] typeFunds;

    event FundCreated(address indexed sender, address indexed receiver, uint256 pickuptime, uint256 distance, uint256 price,address image);
    event FundState(address indexed sender, address indexed receiver, uint256 pickuptime);
    event FundCentral(address indexed sender, address indexed receiver, uint256 deliveryTime);
    event FundPaid(address indexed sender, address indexed receiver, uint256 amount);

    constructor(){
        fundCount = 0;
    }

    function createFund(address _receiver, uint256 _pickupTime, uint256 _distance, uint256 _price,address image,) public {
            //require(msg.value == _price,"Payment amount must match the price");   

            Fund memory fund = Fund(msg.sender, _receiver, _pickupTime, 0, _distance, _price, FundStatus.PENDING, false);

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
                    false
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

    function getFund(address _sender,uint256 _index) public view returns (address , address,uint256,uint256, uint256 ,uint256, FundStatus, bool){
         Fund storage fund = funds[_sender][_index];
         return (fund.sender,fund.receiver,fund.pickupTime,fund.deliveryTime,fund.distance,fund.price,fund.status,fund.isPaid);

    }

    function getFundCount(address _sender) public view returns (uint256) {
        return funds[_sender].length;
    }

    function getAllTransactions()
    public view returns(TypeFund[] memory){
        return typeFunds;
    }
}