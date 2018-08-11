// 终端 touch hello.html创建一个html文件
// chrome单步调试：source选中行数，地址栏回车执行，点击三角继续一行行执行

// 二叉树
// 父节点，子节点，根节点，叶子节点(终端结点)，中间节点，层次n，层次数是二叉树的高n-1
// 排序二叉树：左孩子<父节点<右孩子

// 二叉树创建的代码实现
<script>
  function BinaryTree () {
    var Node = function (key) {
      this.key = key;
      this.leftNode = null;
      this.rightNode =null;
    };
    var rootNode = null;
    var insertNode = function (node, newNode) {
      if(newNode.key < node.key){
        if(node.leftNode === null){
          node.leftNode = newNode;
        }else{
          insertNode(node.leftNode, newNode);
        }
      }else{
        if(node.rightNode === null){
          node.rightNode = newNode;
        }else{
          insertNode(node.rightNode, newNode);
        }
      }
    };

    this.insert = function (key) {
      var newNode = new Node(key);
      if (rootNode === null){
        rootNode = newNode;
      }else{
        insertNode(rootNode, newNode);
      }
    }
  }

  var nodes = [5,6,45,58,4,18];
  var binaryTree = new BinaryTree();
  nodes.forEach(function (key) {
    binaryTree.insert(key);
  });


// 二叉树的遍历：中序 前 后

// 中序遍历的代码实现
// 作用：从小到大排序
// 原理：左子节点没了，就打印该当前节点（左子树->节点->右子数）

  function BinaryTree () {
    var Node = function (key) {
      this.key = key;
      this.leftNode = null;
      this.rightNode =null;
    };
    var rootNode = null;
    var insertNode = function (node, newNode) {
      if(newNode.key < node.key){
        if(node.leftNode === null){
          node.leftNode = newNode;
        }else{
          insertNode(node.leftNode, newNode);
        }
      }else{
        if(node.rightNode === null){
          node.rightNode = newNode;
        }else{
          insertNode(node.rightNode, newNode);
        }
      }
    };

    this.insert = function (key) {
      var newNode = new Node(key);
      if (rootNode === null){
        rootNode = newNode;
      }else{
        insertNode(rootNode, newNode);
      }
    };

    var inOrderTranverseNode = function (node, callback){
      if(node!==null){
        inOrderTranverseNode(node.leftNode,callback);
        callback(node.key);
        inOrderTranverseNode(node.rightNode,callback);
      }
    };
    this.inOrderTranverse = function (callback) {
      inOrderTranverseNode(rootNode, callback);
    }
  }

  var nodes = [5,6,45,58,4,18];
  var binaryTree = new BinaryTree();
  nodes.forEach(function (key) {
    binaryTree.insert(key);
  });

  var callback = function (key) {
    console.log(key);
  };

  binaryTree.inOrderTranverse(callback);



// 前序遍历的代码实现
// 作用：复制二叉树（效率高）
// 原理：打印当前节点，访问当前节点左子节点并打印。。。（节点->左子树->右子数）

  function BinaryTree () {
    var Node = function (key) {
      this.key = key;
      this.leftNode = null;
      this.rightNode =null;
    };
    var rootNode = null;
    var insertNode = function (node, newNode) {
      if(newNode.key < node.key){
        if(node.leftNode === null){
          node.leftNode = newNode;
        }else{
          insertNode(node.leftNode, newNode);
        }
      }else{
        if(node.rightNode === null){
          node.rightNode = newNode;
        }else{
          insertNode(node.rightNode, newNode);
        }
      }
    };

    this.insert = function (key) {
      var newNode = new Node(key);
      if (rootNode === null){
        rootNode = newNode;
      }else{
        insertNode(rootNode, newNode);
      }
    };

    var inOrderTranverseNode = function (node, callback){
      if(node!==null){
        inOrderTranverseNode(node.leftNode,callback);
        callback(node.key);
        inOrderTranverseNode(node.rightNode,callback);
      }
    };
    this.inOrderTranverse = function (callback) {
      inOrderTranverseNode(rootNode, callback);
    };

    var preOrderTranverseNode = function (node, callback){
      if(node!==null){
        callback(node.key);
        preOrderTranverseNode(node.leftNode,callback);
        preOrderTranverseNode(node.rightNode,callback);
      }
    };
    this.preOrderTranverse = function (callback) {
      preOrderTranverseNode(rootNode, callback);
    }
  }

  var nodes = [5,6,45,58,4,18];
  var binaryTree = new BinaryTree();
  nodes.forEach(function (key) {
    binaryTree.insert(key);
  });

  var callback = function (key) {
    console.log(key);
  };

  binaryTree.inOrderTranverse(callback);
  binaryTree.preOrderTranverse(callback);



// 后序遍历的代码实现
// 作用：操作系统的文件遍历
// 原理：访问当前节点左子节点，访问当前节点右子节点，打印当前节点。（左子树->右子数->节点）

  function BinaryTree () {
    var Node = function (key) {
      this.key = key;
      this.leftNode = null;
      this.rightNode =null;
    };
    var rootNode = null;
    var insertNode = function (node, newNode) {
      if(newNode.key < node.key){
        if(node.leftNode === null){
          node.leftNode = newNode;
        }else{
          insertNode(node.leftNode, newNode);
        }
      }else{
        if(node.rightNode === null){
          node.rightNode = newNode;
        }else{
          insertNode(node.rightNode, newNode);
        }
      }
    };

    this.insert = function (key) {
      var newNode = new Node(key);
      if (rootNode === null){
        rootNode = newNode;
      }else{
        insertNode(rootNode, newNode);
      }
    };

    var inOrderTranverseNode = function (node, callback){
      if(node!==null){
        inOrderTranverseNode(node.leftNode,callback);
        callback(node.key);
        inOrderTranverseNode(node.rightNode,callback);
      }
    };
    this.inOrderTranverse = function (callback) {
      inOrderTranverseNode(rootNode, callback);
    };

    var preOrderTranverseNode = function (node, callback){
      if(node!==null){
        callback(node.key);
        inOrderTranverseNode(node.leftNode,callback);
        inOrderTranverseNode(node.rightNode,callback);
      }
    };
    this.preOrderTranverse = function (callback) {
      inOrderTranverseNode(rootNode, callback);
    };

    var postOrderTranverseNode = function (node, callback){
      if(node!==null){
        postOrderTranverseNode(node.leftNode,callback);
        postOrderTranverseNode(node.rightNode,callback);
        callback(node.key);
      }
    };
    this.postOrderTranverse = function (callback) {
      postOrderTranverseNode(rootNode, callback);
    };
  }

  var nodes = [3,7,1];
  var binaryTree = new BinaryTree();
  nodes.forEach(function (key) {
    binaryTree.insert(key);
  });

  var callback = function (key) {
    console.log(key);
  };

  binaryTree.inOrderTranverse(callback);//137
  binaryTree.preOrderTranverse(callback);//137
  binaryTree.postOrderTranverse(callback);//173



// 查找
    var minNode = function (node) {
      if(node){
        while(node && node.leftNode !== null){
          node = node.leftNode;
        }
        return node.key;
      }
      return null;
    };
    this.min = function () {
      return minNode(rootNode);
    };


    var maxNode  = function (node) {
      if(node){
        while(node && node.rightNode !== null){
          node = node.rightNode;
        }
        return node.key;
      }
      return null;
    };
    this.max = function () {
      return maxNode(rootNode);
    };

    var searchNode = function (node, key) {
      if(node === null){
        return false;
      }
      if(node.key  < key){
        searchNode(node.rightNode, key);
      }else if(node.key > key){
        searchNode(node.leftNode, key);
      }else{
        return true;
      }
    };
    this.search = function (key){
      return searchNode(rootNode, key);
    }
  </script>    