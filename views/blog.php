<?php require('./partials/header.php');
require('../models/postmodel.php');
$blogs = getAllPosts();
?>

<body>
  <div class="loader"></div>
  <div id="app">
    <div class="main-wrapper main-wrapper-1">
      <?php require('./partials/navbar.php'); ?>

      <?php require('./partials/sidebar.php') ?>
      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
          <div class="section-body">
            <div class="row">

            <?php while($row = mysqli_fetch_assoc($blogs)){?>
              <div class="col-12 col-md-4 col-lg-4">
                <article class="article article-style-c">
                  <div class="article-details">
                    
                    <div class="article-title">
                      <h2><a href="#"> <?php echo $row['title']; ?> </a></h2>
                    </div>
                    <p><?php echo substr($row['description'],0, 100); ?> ... <a href="">Read More</a></p>
                    
                    <div class="article-user">
                      <img alt="image" src="assets/img/users/user-1.png">
                      <div class="article-user-details">
                        <div class="user-detail-name">
                          <a href="#"><?php echo $row['name']; ?></a>
                        </div>
                        <div class="text-job"><?php 
                      $date=date_create($row['post_time']);
                      echo  date_format($date,"Y/m/d - H:i");
                      ?></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <?php }?>

            </div>
            
            
          </div>
        </section>
        <?php require('./partials/settings.php'); ?>
      </div>
      <?php require('./partials/footer.php') ?>