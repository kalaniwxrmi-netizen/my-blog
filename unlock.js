<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Enter Code</title>
  <style>
    body {font-family: system-ui; background:#0b0b0f; color:#eee; padding:40px;}
    .card {max-width:600px; margin:0 auto; background:#111; padding:24px; border-radius:12px; border:1px solid #222;}
    input {width:100%; padding:12px; border-radius:8px; border:1px solid #333; margin-top:10px;}
    button {padding:10px 14px; margin-top:12px; border:none; border-radius:8px; background:#ffcc00; color:#000; font-weight:700; cursor:pointer;}
    .msg {margin-top:12px; color:#9aa0b4;}
  </style>
</head>
<body>
  <div class="card">
    <h1>Enter Passcode</h1>
    <p class="msg">Hint: it’s a short word from the blog post.</p>
    <input id="code" placeholder="type code here" autocomplete="off"/>
    <button id="try">Unlock</button>
    <p id="feedback" class="msg"></p>
  </div>

  <script src="assets/unlock.js"></script>
</body>
</html>
