//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tracking{
    enum FundStatus {PENDING, STATE, CENTRAL,REJECTED}

    struct Fund {
        address sender;
        address receiver;
        string name;
        string Req_Date;
        string from;
        uint256 amount;
        string reason;
        string image;
        FundStatus status;
        bool isPaid;
        string feedback;
        string To;
        string file;
        string Id_proof;
    }
    mapping(address => Fund[]) public funds;

    struct Confirm {
        address sender;
        address receiver;
        string name;
        string Req_Date;
        string from;
        uint256 amount;
        string reason;
        string image;
        FundStatus status;
        bool isPaid;
        string feedback;
        string To;
        string file;
        string Id_proof;

    }
    mapping(address => Confirm[]) public confirms;

    struct TypeFund {
        address sender;
        address receiver;
        string name;
        string Req_Date;
        string from;
        uint256 amount;
        string reason;
        string image;
        FundStatus status;
        bool isPaid;
        string feedback;
        string To;
        string file;
        string Id_proof;
    }
    TypeFund[] typeFunds;

    uint256 public fundCount;

    event FundCreated(address indexed sender, address indexed receiver, string req_date, string from, uint256 amount);
    event FundState(address indexed sender, address indexed receiver, string req_date);
    event FundRejected(address indexed sender, address indexed receiver,string feedback);
    event FundCentral(address indexed sender, address indexed receiver,uint256 amount);
    event FundPaid(address indexed sender, address indexed receiver, uint256 amount);

    constructor(){
        fundCount = 0;
    }

    function createFund(address sender,string memory name,string memory Req_Date,string memory from,uint256 amount,string memory reason,string memory image,string memory feedback,string memory To,string memory file,string memory Id_proof) public { 

            Fund memory fund = Fund(sender,msg.sender,name, Req_Date,from, amount, reason, image,FundStatus.PENDING, false,feedback,To,file,Id_proof);
            Confirm memory confi = Confirm(sender,msg.sender,name, Req_Date,from, amount, reason, image,FundStatus.PENDING, false,feedback,To,file,Id_proof);

            funds[sender].push(fund);
            confirms[msg.sender].push(confi);
            fundCount ++;

            typeFunds.push(
                TypeFund(
                    sender,
                    msg.sender,
                    name,
                    Req_Date,
                    from, 
                    amount, 
                    reason, 
                    image,
                    FundStatus.PENDING, 
                    false,
                    feedback,
                    To,
                    file,
                    Id_proof
                )
            );

            emit FundCreated(sender,msg.sender, Req_Date, from, amount);
    }

   function startFund(address _sender,address _receiver, uint256 _index, address update) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];
        Confirm storage confi = confirms[_receiver][_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status == FundStatus.PENDING,'Fund already in STATE APPROVED');

        fund.status = FundStatus.STATE;
        typeFund.status = FundStatus.STATE;
        confi.status = FundStatus.STATE;

        fund.sender = update;
        typeFund.sender = update;
        confi.sender = update;

        fund.To = "Central";
        typeFund.To = "Central";
        confi.To = "Central";

        funds[update].push(fund);

        emit FundState(_sender, _receiver, fund.Req_Date);
    }


    function RejectFund(address _sender,address _receiver, uint256 _index,string memory _feedback) public {
        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];
        Confirm storage confi = confirms[_receiver][_index];

        require(fund.receiver == _receiver,'Invalid receiver');
        require(fund.status == FundStatus.PENDING || fund.status == FundStatus.STATE,'Fund already Rejected.');

        fund.status = FundStatus.REJECTED;
        typeFund.status = FundStatus.REJECTED;
        confi.status = FundStatus.REJECTED;

        fund.feedback = _feedback;
        typeFund.feedback = _feedback;
        confi.feedback = _feedback;

        emit FundRejected(_sender, _receiver,_feedback);
    }

    function centralFund(address _sender, address  _receiver, uint256 _index,uint256 _amount) public payable {

        Fund storage fund = funds[_sender][_index];
        TypeFund storage typeFund = typeFunds[_index];
        Confirm storage confi = confirms[_receiver][_index];

        console.log
        require(fund.receiver != _receiver,'Invalid receiver');
        require(fund.status == FundStatus.REJECTED  ,'Fund is rejected.');
        //require(!fund.isPaid, "Fund already paid");
        require(msg.value == _amount);

        fund.status = FundStatus.CENTRAL;
        typeFund.status = FundStatus.CENTRAL;
        confi.status = FundStatus.CENTRAL;

        /*typeFund.Accepted_on = block.timestamp;
        fund.Accepted_on = block.timestamp;
        confi.Accepted_on = block.timestamp;
        */

        fund.isPaid = true;
        typeFund.isPaid = true;

        emit FundCentral(_sender, _receiver,_amount);
        emit FundPaid(_sender, _receiver, _amount);
    }

    function transferTo(
        address to,
        uint256 amount
    ) internal{
        payable(to).transfer(amount);
    }
    

    function getFund(address _receiver,uint256 _index) public view returns (address , address,string memory,string memory,string memory,uint256,string memory,string memory, FundStatus, bool,string memory){
        Confirm storage confi = confirms[_receiver][_index];
        return (confi.sender,confi.receiver,confi.name, confi.Req_Date,confi.from, confi.amount,confi.reason,confi.feedback,confi.status,confi.isPaid,confi.To);
 
    }

    function getFundmain(address _sender,uint256 _index) public view returns (address , address,string memory,string memory,string memory,uint256,string memory,string memory, FundStatus, bool,string memory,string memory,string memory){
        Fund storage fund = funds[_sender][_index];
        return (fund.sender,fund.receiver,fund.name, fund.Req_Date,fund.from, fund.amount,fund.reason,fund.feedback,fund.status,fund.isPaid,fund.image,fund.Id_proof,fund.file);
 
    }

    function getFundCount(address _sender) public view returns (uint256) {
        return confirms[_sender].length;
    }

    function getAllTransactions() 
    public view returns(TypeFund[] memory){
        return typeFunds;
    }
}