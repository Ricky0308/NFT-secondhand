// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/utils/Counters.sol";


contract manga_license is ERC721URIStorage {

    function approve(address to, uint tokenId)public override {}
    function safeTransferFrom(address from,address to, uint256 tokenId, bytes memory _data)public override {}
    function safeTransferFrom(address from,address to,uint256 tokenId) public override {}
    


    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint buy_new =0.002 ether;
    uint buy_min=0.001 ether;
    mapping (address=>uint) balance;

    address public owner;

    mapping (uint => mapping(address => bool)) authorization_confirmation;
    mapping (uint => uint ) tokenid_to_mangaid;
    mapping (uint => uint ) nft_price;
    mapping(address=>mapping(uint=>uint256)) mangaid_to_tokenid; 

    constructor () ERC721 ("manga_license", "manga") {
        owner=msg.sender;
    }

    function mint(uint _mangaid) public payable  {
        require(msg.value>=buy_new);//支払価格が最低購入価格以上かを確認
        require(authorization_confirmation[_mangaid][msg.sender]==false,"you have this cartoon");//すでに持っているかを確認
        balance[owner]+=msg.value;//オーナーに料金をデポジット

        _tokenIds.increment();//トークンidをインクリメント
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, "aaa");//ipfsのIRLを代入する
        authorization_confirmation[_mangaid][msg.sender]=true;
        mangaid_to_tokenid[msg.sender][_mangaid]=newItemId;
        tokenid_to_mangaid[newItemId]=_mangaid;
    }

    function tokenid_mangaid(uint _token_id)private   view returns (uint ){
        return tokenid_to_mangaid[_token_id];
    }

    function _auth(uint _mangaid)public view returns (bool){
        return  authorization_confirmation[_mangaid][msg.sender];
    }

    function mangaid2tokenid(uint _managaid)private  view returns (uint){
        return mangaid_to_tokenid[msg.sender][_managaid];
    }

    function approve_manga(address to, uint256 _mangaid ,uint price ) public returns (uint) {
        uint256 tokenId=mangaid_to_tokenid[msg.sender][_mangaid];
        //uint256 tokenId=_mangaid;
        
        address _owner = ERC721.ownerOf(tokenId);
        require(to != _owner, "ERC721: approval to current owner");

        require(
            _msgSender() == _owner || isApprovedForAll(_owner, _msgSender()),
            "ERC721: approve caller is not owner nor approved for all"
        );
        require(price>=buy_min);
        require(authorization_confirmation[_mangaid][to]==false); 

        nft_price[tokenId]=price;
        _approve(to, tokenId);

        return  tokenId;
    }

    function getApproved_manga(uint _tokenid)public view returns (uint ,uint ,address){
        uint managa_id=tokenid_to_mangaid[_tokenid];
        uint price=nft_price[_tokenid];
        address _to = getApproved(_tokenid);
        return (managa_id ,price,_to);
    }

    function trade(uint token_id)public payable{//fromとtoがなくても動くようにする
        require(msg.value>=nft_price[token_id]);
        address token_owner=ownerOf(token_id);
        authorization_confirmation[tokenid_to_mangaid[token_id]][token_owner]=false;
        authorization_confirmation[tokenid_to_mangaid[token_id]][msg.sender]=true;

        uint _mangaid =tokenid_mangaid(token_id);
        mangaid_to_tokenid[token_owner][_mangaid]=0;
        mangaid_to_tokenid[msg.sender][_mangaid]=token_id;
        _transfer(token_owner, msg.sender, token_id);
        balance[token_owner]+=msg.value/10*7;
        balance[owner]+=msg.value/10*3;
    }

    function get_deposit()public view returns(uint){
        return balance[msg.sender];
    }
    function withdraw()public{
        payable (msg.sender).transfer(balance[msg.sender]);
        balance[msg.sender]=0;
    }

    function withdraw_owner()public{//バグ用
        require(owner==msg.sender);
        payable (owner).transfer(address(this).balance);
        balance[msg.sender]=0;
    }
}