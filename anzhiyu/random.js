var posts=["2025/04/26/HelloWorld/","2021/01/01/1 - 副本 (2)/","2021/01/01/1 - 副本 (6)/","2021/01/01/1/","2021/01/01/1 - 副本/","2021/01/01/1 - 副本 (3)/","2021/01/01/1 - 副本 (5)/","2021/01/01/1 - 副本 (4)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };