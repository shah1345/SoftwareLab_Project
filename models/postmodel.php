<?php 
    require_once("dbconnect.php");

    function getAllPosts(){
        $connect = mysqli_connect(HOST,USER, PASS, DB) 
        or die("Cannnot connect to database");

        $sqlcommand = "SELECT posts.id AS post_id, title, description, posted_by, post_time, users.id AS user_id, name, profile_photo_path FROM posts  JOIN users ON users.id = posted_by WHERE 1";
        $result = mysqli_query($connect , $sqlcommand)
        or die("Cannnot connect to database");
        return $result;

    }
 ?>