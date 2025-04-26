var posts=["2025/04/25/test/","2025/04/26/HelloWorld/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };