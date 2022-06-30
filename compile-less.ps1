Remove-Item .\assets\css -Recurse -Force -Confirm:$false

Get-ChildItem .\assets\less | Foreach-Object {
  $name = $_.Name
  $filename = $name.Substring(0, $name.IndexOf('.'))

  lessc --source-map ./assets/less/$name ./assets/css/$filename.css
}