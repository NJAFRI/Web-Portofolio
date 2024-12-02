<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio</title>
    <style>
        /* Reset dasar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #e5fd07, #3300aad2); 
    overflow: auto;
    max-width: 1280px;
    min-height: 720px;
}


        #Portofolio {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: left;
            background-color: transparent;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 110px;
            transition: all 0.3s;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            max-width: 100%;
        }

        #Portofolio:hover {
            background-color: #45a049;
            transform: translate(-50%, -50%) scale(1.05);
        }
    </style>
</head>
<body>
    <a href="web/HOMESC.html"><button id="Portofolio">RAN TO PORTOFOLIO</button></a>
</body>
</html>
