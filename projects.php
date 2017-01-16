<?php

$projects = file_get_contents("projects.json");

$items = json_decode($projects);

$open = 0;
$close = 0;

foreach ($items->items as $key => $project) {
    if ($key % 3 === 0) {
        $open++;
        ?>
        <div class="row">
        <?php
    }
    ?>
    <div class="col s12 m4 center">
        <img class="materialboxed" src="images/<?= $project->imageLink ?>">
        <a href="<?=$project->projectLink ?>" target="_blank"><?=$project->project ?></a>
    </div>
    <?php
    if ($key % 3 === 2) {
        $close++;
        ?>
        </div>
        <?php
    }
}
while($close < $open) {
    $close++;
    ?>
    </div>
    <?php
}