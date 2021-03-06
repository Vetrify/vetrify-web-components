# Status: WIP - needs some work
# TODO: programmatically update the main readme.md adr in the docs folder with all decisions
# TODO: finish automation of completion of all sections in the 'adr-new' command

#initalize adr folder


function Adr-Init ($path) {
	Set-Location $PSScriptRoot;
	
	#default adr repostory root
	$destinationDirectory = "docs\adr"

	#create adr repo folder only if its not there yet
	if (-not ([string]::IsNullOrEmpty($path))){
		$destinationDirectory = $path
		$AdrDefaultFolder = $path		
	}

	if(!(Test-Path -Path $destinationDirectory )){
		#create adr folder
		New-Item -ItemType Directory -Force -Path $destinationDirectory

		#create readme.md file
		New-Item "$destinationDirectory\readme.md" -type file -force -value "# Adr

Documentations of architecturally significant functional and non-functional decisions through out solution lifetime."
	} else {
		Write-Warning -Message "Adr target folder $destinationDirectory already exists"
	}
}

#create adr entry
function Adr-New ([Parameter(Mandatory=$true)]$title) {
	Set-Location $PSScriptRoot;

	#default adr repostory root
	$destinationDirectory = "docs\adr"	

	#find the latest adr sequence
	$latestFile = Get-ChildItem -Filter "*.md" -Name -File $destinationDirectory | Sort-Object -Descending | Select-Object -Skip 1 -First 1

	$nextSequenceNo = "0000"
	if ($latestFile -eq "readme.md"){
		$nextSequenceNo = "0001"
	} else {
		$nextSequenceInt = [int]$latestFile.Substring(0,4) + 1
		$nextSequenceNo = $nextSequenceInt.ToString("0000")
	}

	#slugify title
	$slugifiedTitle = $title.ToLower().Replace(" ","-")
	$datePosted = Get-Date -Format "yyyy-MM-dd
	"

	#create new adr record
	New-Item "$destinationDirectory\$nextSequenceNo-$slugifiedTitle.md" -type file -force -value "# $nextSequenceNo. $title
 
Date: $datePosted
 
## Status
 
{adr-decision-status}
 
## Context

{adr-decision-context} 
 
## Decision
 
{adr-decision} 
  
## Consequences
 
{adr-decision-consequences} 
"
}

# function Adr-UpdateMaster(){
# 	Set-Location $PSScriptRoot;

# 	#default adr repostory root
# 	$destinationDirectory = "docs\adr"	

# 	#find the latest adr sequence
# 	$latestFiles = Get-ChildItem "*.md" -Name -File $destinationDirectory 

# 	$vals = $latestFiles | Select-Object -Property "fileName"

# }

function Adr-Help(){
}

#export modules to be made available in ps session
Export-ModuleMember -Function 'Adr-Init'
Export-ModuleMember -Function 'Adr-New'
Export-ModuleMember -Function 'Adr-Help'