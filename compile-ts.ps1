Remove-Item .\assets\js -Recurse -Force -Confirm:$false

tsc -p ./assets/ts

Write-Output 'Compiled TS to JS'