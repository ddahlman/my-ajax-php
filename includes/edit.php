<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Edit</title>
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>
  <?php
if(isset($_GET['edit'])){
    $inputs = $_GET['edit'];
    $edits = explode(',', $inputs);
}
?>
    <div class='container'>
      <div class='well'>
        <h1>Ändra personuppgifterna</h1>
        <div class='form-group'>
          <label class='control-label' for="name">Namn</label>
          <input class='form-control' value='<?php echo $edits[0]?>' id='editName' name='name' type="text">
        </div>
        <div class='form-group'>
          <label class='control-label' for="address">Adress</label>
          <input class='form-control' value='<?php echo $edits[1]?>' id='editAddress' name='address' type="text">
        </div>
        <div class='form-group'>
          <label class='control-label' for="phone">Telefon</label>
          <input class='form-control' value='<?php echo $edits[2]?>' id='editPhone' name='phone' type="text">
        </div>
        <div class='form-group'>
          <label class='control-label' for="email">E-mail</label>
          <input class='form-control' value='<?php echo $edits[3]?>' id='editEmail' name='email' type="text">
        </div>
        <input type="hidden" value="<?php echo $edits[4]?>">
        <button id='saveEdit' class='btn btn-info btn-sm'>spara ändringar</button>
        <button id='clearEdit' class='btn btn-danger btn-sm'>rensa</button>
        <button id='goback' class='btn btn-info btn-sm'>backa</button>
      </div>
      <div class='alert alert-success'>
        Personuppgifter är uppdatterade!
      </div>
    </div>
</body>
<script src='../js/jquery-3.1.1.min.js'></script>
<script src='../js/admin-ajax.js'></script>

</html>