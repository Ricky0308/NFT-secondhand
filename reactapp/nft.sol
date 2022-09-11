// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/utils/Counters.sol";


contract manga_license is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint buy_new =0.05 ether;
    uint buy_min=0.03 ether;
    mapping (address=>uint) balance;

    address public sender;
    address public owner;
    uint public amount;

    mapping (uint => mapping(address => bool)) authorization_confirmation;
    mapping (uint => uint ) tokenid_to_mangaid;
    mapping (uint => uint ) nft_price;

    constructor () ERC721 ("manga_license", "manga") {
        owner=msg.sender;
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

    function approve(address to, uint256 tokenId ,uint price ) public override   {
        address _owner = ERC721.ownerOf(tokenId);
        require(to != _owner, "ERC721: approval to current owner");

        require(
            _msgSender() == _owner || isApprovedForAll(_owner, _msgSender()),
            "ERC721: approve caller is not owner nor approved for all"
        );
        require(price>=buy_min);
        nft_price[tokenId]=price;
        _approve(to, tokenId);
    }

    function trade(uint token_id)public payable{//fromとtoがなくても動くようにする
        require(msg.value>=nft_price[token_id]);
        address token_owner=ownerOf(token_id);
        //balance[owner]+=_amount;
        authorization_confirmation[tokenid_to_mangaid[token_id]][token_owner]=false;
        authorization_confirmation[tokenid_to_mangaid[token_id]][msg.sender]=true;
        _transfer(token_owner, msg.sender, token_id);
        balance[token_owner]+=msg.value/10*7;
        balance[owner]+=msg.value/10*3;
    }
    
    function _auth(uint _id)public view returns (bool){
        return  authorization_confirmation[_id][msg.sender];
    }

    function tokenid_mangaid(uint _token_id)public  view returns (uint ){
        return tokenid_to_mangaid[_token_id];
    }

    

    function mint(uint _mode) public payable  returns (uint256) {
        require(msg.value>=buy_new);
        require(authorization_confirmation[_mode][msg.sender]==false,"you have this cartoon");
        balance[owner]+=msg.value;
        if (_mode==1){//1話
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _safeMint(msg.sender, newItemId);
            _setTokenURI(newItemId, "aaa");
            authorization_confirmation[1][msg.sender]=true;
            tokenid_to_mangaid[newItemId]=1;
            return newItemId;
        }
        else if (_mode==2){//2話
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _safeMint(msg.sender, newItemId);
            _setTokenURI(newItemId, "aaa");
            authorization_confirmation[2][msg.sender]=true;
            tokenid_to_mangaid[newItemId]=2;
            return newItemId;
        }
        else if (_mode==3){//3話
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _safeMint(msg.sender, newItemId);
            _setTokenURI(newItemId, "aaa");
            authorization_confirmation[3][msg.sender]=true;
            tokenid_to_mangaid[newItemId]=3;
            return newItemId;
        }
        return 0;
    }
}