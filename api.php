<?php
class api {
    private $url = 'http://pimcore_ent_30.local/webservice/rest/';
    private $api_key = '74e60552988927c51caac2bfea4e55a213716b6c48ce489e08d11b644553554d';
    //private $url = 'http://gogoairadmin.ossclients.com/webservice/rest/';
    //private $api_key = '11a3187ed76ce5ab784933dcbf954f5f8b5357569f6dd6ee2dfe2febb0383020';
    public $channelArr = array();
    public $productArr = array();
    public $objectArr = array();
    public $routeArr = array();
    public $productOfferingArr = array();
    public $productOfferingArrParent = array();
    private $channelId = 376;
    public $channelName = 'GogoAir.com';
    private $productName = null;
    private $routeName = null;
    private $routeId = 0;
    public $dataArr = array();

    public function __construct() {
        if(isset($_GET['channel']) && !empty($_GET['channel'])) {
            $this->channelName = $_GET['channel'];
        }

        if(isset($_GET['product']) && !empty($_GET['product'])) {
            $this->productName = $_GET['product'];
        }

        if(isset($_GET['route']) && !empty($_GET['route'])) {
            $this->routeName = $_GET['route'];
        }
    }

    private function makeCurlRequest($url=null, $params=null) {

        $encoded = '';

        if(is_array($params)) {
            foreach($params as $name => $value) {
                $encoded .= '&'.urlencode($name).'='.urlencode($value);
            }
        }

        $url = $this->url.$url.'?apikey='.$this->api_key.$encoded;

        //pr($url);

        // create curl resource
        $ch = curl_init();

        // set url
        curl_setopt($ch, CURLOPT_URL, $url);

        //curl_setopt($ch, CURLOPT_POSTFIELDS,  $encoded);

        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // $output contains the output string
        $output = curl_exec($ch);

        // close curl resource to free up system resources
        curl_close($ch);

        if ($output === false) {
            $info = curl_getinfo($ch);
            curl_close($ch);
            die('error occured during curl exec. Additioanl info: ' . var_export($info));
        }
        
        return json_decode($output);
    }   
        
    
    public function getObjectById($id=null, $key=null) {
        $objectData = $this->makeCurlRequest('object'.$id, null);

        if($this->checkObj($objectData)) {
            if(empty($key)) {
                $key = $objectData->data->className;
            }
            $this->objectArr[$key][$objectData->data->id] = $objectData->data;
        }
    }


    public function getChannelList($params=null) {
        $params['objectClass'] = 'Channel';
        $params['condition'] = " o_published=1 ";
        $objList = $this->makeCurlRequest('object-list', $params);
        
        if($this->checkObj($objList)) {
            foreach($objList->data as $objectListId) {
                $this->dataArr['Channel'][$objectListId->id]['id'] = $objectListId->id; // tmp data set
                
                $this->getObjectById('/id/'.$objectListId->id, 'Channel');
            }
            
            if(isset($this->objectArr['Channel'])) {
                foreach($this->objectArr['Channel'] as $channelKey=>$channelVal) {
                    foreach($channelVal as $ekey=>$eval) {
                        $this->channelArr[$channelKey][$ekey] = $eval;
                    }
                    foreach($channelVal->elements as $ekey=>$eval) {
                        $this->channelArr[$channelKey][$eval->name] = $eval->value;
                        if(strtolower($this->channelArr[$channelKey]['name']) == strtolower($this->channelName)) {
                            $this->channelId = $channelKey;
                        }
                    }
                    unset($this->channelArr[$channelKey]['elements']);
                }
            }
        }
    }
    
    public function getProductsOffersByChannel($params = null) {
        
        if(isset($this->dataArr['Channel']) && !empty($this->dataArr['Channel'])) {
                        
            if(!empty($this->channelId)) {
                $this->getAllProductOffers($this->channelId);
            } else {
                foreach($this->dataArr['Channel'] as $channelId=>$channelVal) {
                    $this->getAllProductOffers($channelId);
                }
            }
            
        }
    }
    
    private function getAllProductOffers($channelId = 0) {
        $params['objectClass'] = 'ProductOffering';
        $params['condition'] = " o_published=1 AND FIND_IN_SET(".$channelId.", channels) AND o_type IN ('object', 'variant') "; 
        
        if(!empty($this->routeName)) {
            $this->getChannelRoutes();
            $params['condition'] .= " AND FIND_IN_SET(".$this->routeId.", routes) ";
        }
        
        $offersList = $this->makeCurlRequest('object-list', $params);
        
        if($this->checkObj($offersList)) {
            foreach($offersList->data as $offersListData) {
                
                $this->dataArr['Channel'][$channelId]['ProductOffering'][$offersListData->id]['id'] = $offersListData->id; // tmp data set
                
                $this->getObjectById('/id/'.$offersListData->id, 'ProductOffering');
                
                foreach($this->objectArr['ProductOffering'][$offersListData->id] as $poKey=>$poVal) {
                    $this->productOfferingArr[$offersListData->id][$poKey] = $poVal;
                    
                    if($poKey === 'elements') {
                        foreach($poVal as $ekey=>$eval) {
                            $this->productOfferingArr[$offersListData->id][$eval->name] = $eval->value;
                        }
                        unset($this->productOfferingArr[$offersListData->id]['elements']);
                    }
                }
                
                
                $childData = $this->productOfferingArr[$offersListData->id];
                
                if($childData['type'] === 'variant' && !empty($childData['parentId']) && empty($childData['products'])) {
                    $this->getObjectById('/id/'.$childData['parentId'], 'ProductOfferingParent');
                    
                    foreach($this->objectArr['ProductOfferingParent'][$childData['parentId']] as $poKey=>$poVal) {
                        $this->productOfferingArrParent[$childData['parentId']][$poKey] = $poVal;
                        
                        if($poKey === 'elements') {
                            foreach($poVal as $ekey=>$eval) {
                                $this->productOfferingArrParent[$childData['parentId']][$eval->name] = $eval->value;
                            }
                            unset($this->productOfferingArrParent[$childData['parentId']]['elements']);
                        }
                    }
                    
                    $this->productOfferingArr[$offersListData->id]['products'] = $this->productOfferingArrParent[$childData['parentId']]['products'];
                    
                    if(empty($this->productOfferingArr[$offersListData->id]['price'])) {
                        $this->productOfferingArr[$offersListData->id]['price'] = $this->productOfferingArrParent[$childData['parentId']]['price'];
                    }
                    if(empty($this->productOfferingArr[$offersListData->id]['name'])) {
                        $this->productOfferingArr[$offersListData->id]['name'] = $this->productOfferingArrParent[$childData['parentId']]['name'];
                    }
                    if(empty($this->productOfferingArr[$offersListData->id]['desc'])) {
                        $this->productOfferingArr[$offersListData->id]['desc'] = $this->productOfferingArrParent[$childData['parentId']]['desc'];
                    }
                    
                    $this->productOfferingArr[$offersListData->id]['parent'] = $this->productOfferingArrParent[$childData['parentId']];
                    
                }
                
                /*if(!empty($this->productName)) { 
                    $this->getProductByName($offersListData->id);
                } else {
                    $this->getProducts($offersListData->id);
                }*/
            }
        }
    }
    
    /* temporarily commented
     * 
     * public function getProductsOffers($params = null) {
        $params['objectClass'] = 'ProductOffering';
        $params['condition'] = " o_published=1 and o_type='object' AND FIND_IN_SET(".$this->channelId.", channels) ";
        
        if(!empty($this->routeName)) {
            $this->getChannelRoutes();
            $params['condition'] .= " AND FIND_IN_SET(".$this->routeId.", routes) ";
        }
        
        $offersList = $this->makeCurlRequest('object-list', $params);
        
        if($this->checkObj($offersList)) {
            foreach($offersList->data as $offersListData) {
                $this->getObjectById('/id/'.$offersListData->id, 'ProductOffering');
                
                foreach($this->objectArr['ProductOffering'][$offersListData->id]->elements as $ekey=>$eval) {
                    $this->productOfferingArr[$offersListData->id][$eval->name] = $eval->value;
                }
                
                if(!empty($this->productName)) { 
                    $this->getProductByName($offersListData->id);
                } else {
                    $this->getProducts($offersListData->id);
                }
            }
        }
    }*/
    
    public function getProducts($offersId = null) {
        $offersProductIds = $this->productOfferingArr[$offersId]['products'];
        
        foreach($offersProductIds as $productIds) {
            $this->getObjectById('/id/'.$productIds->id, 'Product');
        }
        
        $this->prepareProductArr($offersId);
    }
    
    public function getProductByName($offersId = null) {
        if(!empty($this->productName)) {            
            $params['objectClass'] = 'Product';
            $params['condition'] = ' o_published=1 AND name like "%'.$this->productName.'%"';
            $objList = $this->makeCurlRequest('object-list', $params);
            
            $offersProductIds = $this->productOfferingArr[$offersId]['products'];
            
            $productIdArr = array();
            foreach($offersProductIds as $productIds) {
                $productIdArr[] = $productIds->id;
            }
            
            if($this->checkObj($objList)) {
                foreach($objList->data as $objectListId) {
                    if(in_array($objectListId->id, $productIdArr) && !empty($productIdArr)) {
                        $this->getObjectById('/id/'.$objectListId->id, 'Product');
                    }
                }
                
                $this->prepareProductArr($offersId);
            }
        }
    }
    
    private function prepareProductArr($offersId = null) {
        $offersProductIds = $this->productOfferingArr[$offersId]['products'];
        
        foreach($offersProductIds as $productIds) {
        
            if(isset($this->objectArr['Product'][$productIds->id])) {
                foreach($this->objectArr['Product'][$productIds->id] as $poKey=>$poVal) {
                    $this->productArr[$offersId][$productIds->id][$poKey] = $poVal;
                    
                    if($poKey === 'elements') {
                        foreach($poVal as $ekey=>$eval) {
                            $this->productArr[$offersId][$productIds->id][$eval->name] = $eval->value;
                        }
                        unset($this->productArr[$offersId][$productIds->id]['elements']);
                        
                        $this->productArr[$offersId][$productIds->id]['price'] = $this->productOfferingArr[$offersId]['price'];
                    }
                }
                
                /*foreach($this->objectArr['Product'] as $product) {                
                    $this->productArr[$offersId][$product->id][$eval->name] = $eval->value;
                    foreach($product->elements as $ekey=>$eval) {
                        $this->productArr[$offersId][$product->id][$eval->name] = $eval->value;
                    }
                    unset($this->productArr[$offersId][$product->id]['elements']);
                    $this->productArr[$offersId][$product->id]['price'] = $this->productOfferingArr[$offersId]['price'];
                }*/
            }
        }
    }
    
        
    /* temporarily comments
    private function prepareProductArr($offersId = null) {
        if(isset($this->objectArr['Product'])) {
            foreach($this->objectArr['Product'] as $product) {
                foreach($product as $poKey=>$poVal) {
                    $this->productArr[$offersId][$product->id][$poKey] = $poVal;

                    if($poKey === 'elements') {
                        foreach($poVal as $ekey=>$eval) {
                            $this->productArr[$offersId][$product->id][$eval->name] = $eval->value;
                        }
                        unset($this->productArr[$offersId][$product->id]['elements']);
                        $this->productArr[$offersId][$product->id]['price'] = $this->productOfferingArr[$offersId]['price'];
                    }
                }
            }
        }
    }*/
   
    
    private function getChannelRoutes() {
        $params['objectClass'] = 'ChannelRoute';
        $params['condition'] = ' o_published=1 AND name like "'.$this->routeName.'"';
        $params['limit'] = 1;
        $objList = $this->makeCurlRequest('object-list', $params);

        if($this->checkObj($objList)) {
            foreach($objList->data as $objectListId) {
                $this->getObjectById('/id/'.$objectListId->id, 'ChannelRoute');
                $this->routeId = $objectListId->id;
            }
            
            foreach($this->objectArr['ChannelRoute'] as $routeKey=>$routeVal) {
                foreach($routeVal as $ekey=>$eval) {
                    $this->routeArr[$routeKey][$ekey] = $eval;
                }
                foreach($routeVal->elements as $ekey=>$eval) {
                    $this->routeArr[$routeKey][$eval->name] = $eval->value;
                    if(strtolower($eval->value) == strtolower($this->routeName)) {
                        $this->routeId = $routeKey;
                    }
                }
                unset($this->routeArr[$routeKey]['elements']);
            }
        }
    }
    
    private function checkObj($obj = null) {
        if(isset($obj) && 1 == $obj->success && !empty($obj->data)) {
            return true;
        }
        return false;
    }
}

   
function pr($str=null) {
    echo '<pre>';
    //var_dump($str);
    print_r($str);
    echo '</pre>';
}

