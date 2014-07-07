<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

include('api.php');

class controller extends api {
    public $params = array(
            'condition' => null,
            'order' => 'ASC',
            'orderKey' => 'o_id',
            'offset' => 0,
            'limit' => 10,
            );
    public $data = array();
    
    public function showProducts() {
        $this->getChannelList($this->params);
        
        $this->data['channelDropDown'] = $this->channelArr;

        $this->data['channelName'] = $this->channelName;

        $this->getProductsOffersByChannel($this->params);

        //$this->data['productListing'] = $this->productArr;
        $this->data['productListing'] = $this->productOfferingArr;        
    }
    
    public function showOffers() {
        $this->getProductsOffers($this->params);
    }
}
