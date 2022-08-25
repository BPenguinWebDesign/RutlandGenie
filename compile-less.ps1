Remove-Item .\assets\css -Recurse -Force -Confirm:$false

Get-ChildItem .\ *.html | Foreach-Object {
  $name = $_.Name
  $filename = $name.Substring(0, $name.IndexOf('.'))

  if ($filename -eq "index") {
    $filename = "home"
  }
  
  lessc --source-map ./assets/less/$filename.less --autoprefix="> 0.2%, not dead, last 3 versions" ./assets/css/$filename.css
}

Write-Output 'Compiled Less to CSS'