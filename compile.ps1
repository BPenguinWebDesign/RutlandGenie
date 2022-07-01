$counter = 0
$msg = 'Compile #'

$loop = $args[0]

while($true) {
  ./compile-ts
  ./compile-less

  if($loop) {
    $counter++

    Write-Output $msg$counter ''
    
    Start-Sleep -Seconds $loop
  } else {
    Exit
  }
}