<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Page Restricted</title>

<link rel="stylesheet" type="text/css" href="default.css">

<style>
.text3 {
	FONT-SIZE: 12px;
	font-family:Verdana, Arial, Helvetica, sans-serif;
	color:#000000;
	text-decoration:none;
}
.menuTitle {
	FONT-SIZE: 18px;
	font-family:Verdana, Arial, Helvetica, sans-serif;
	color:#4B4C4D;
	font-weight:bold;
	text-decoration:none;
}
</style>
<script language="JavaScript"> 
<!--

function getParameter(name)
{  
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( window.location.href );  
	
	if( results == null )    
		return "";  
	else    
		return results[1];
}

function decode(encodedItem) 
{
	return decodeURIComponent(encodedItem.replace(/\+/g,  " "));
}


function displaySections()
{
	if(getParameter('ldu') == '1')
	{
		document.getElementById('loginDifferentUser').innerHTML = '<a href=\"javascript:openSessionInNewWindow();\" onClick=\"openSessionInNewWindow();this.blur();return false;\" class=\"button\"><img src=\"login.gif\" border=\"0\"></a>';
	}
	
	if(getParameter('re') == '1')
	{
		document.getElementById('exception1').innerHTML = 'Request An Exception';
		document.getElementById('exception2').innerHTML = 'Reason:';
		document.getElementById('exception3').innerHTML = '<textarea id="rem2" name=\"rem2\" rows=\"3\" cols=\"40\"></textarea>';
		document.getElementById('exception4').innerHTML = '<a href=\"javascript:requestOverride();\" class=\"button\" onClick=\"this.blur();\"><img src=\"exception.gif\" border=\"0\"></a>';
		document.getElementById('exception5').innerHTML = 'Email:';
		document.getElementById('exception6').innerHTML = '<input type=\"text\" id=\"rem3\" name=\"rem3\" size=\"40\">';
	}

	document.getElementById('url').innerHTML = '<a href="http://' + decode(getParameter('bu')) + '">' + decode(getParameter('bu')) + '</a>';
	document.getElementById('description').innerHTML = decode(getParameter('bc'));
	document.getElementById('groupNumber').innerHTML = decode(getParameter('fp'));
	document.getElementById('ipAddress').innerHTML = decode(getParameter('ip'));
	document.getElementById('customText').innerHTML = decode(getParameter('ct'));
}
 
function requestOverride()
{	
	document.forms[0].fullUrl.value = decode(getParameter('bu'));
	document.forms[0].button.value = 'requestException';
	
	if(document.getElementById("rem2"))
	{
		document.forms[0].rem.value = document.getElementById("rem2").value;
	}
	
	if(document.getElementById("rem3"))
	{
		document.forms[0].contactEmail.value = document.getElementById("rem3").value;
	}
	
	document.forms[0].gn.value = decode(getParameter('fp'));
	document.forms[0].action = 'http://' + getParameter('ibip') + '/page_block_submit';
	document.forms[0].submit();
}
function openSessionInNewWindow()
{
	var newWindow = window.open('http://' + getParameter('ibip') + '/user_login_small.html','iBossSessionWindow','toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, width=625, height=511');
	newWindow.focus();
	return false;
} 

// -->
</script>
</head>
<body bgcolor="#f5f5f5" topmargin="0" onLoad="javascript:displaySections();">
<center>
  <table class="maincontent" cellpadding="0" cellspacing="0" width="700" bgcolor="#FFFFFF">
    <tr>
      <td class="headerCell"><img src="top.gif" /></td>
    </tr>
    
    <tr>
      <td class="bodyCell" height="130" align="left"><table cellpadding="0" cellspacing="0" width="100%" align="left">
          <tr>
            <td colspan="100%" height="20"></td>
          </tr>
          <TR>
                        <TD COLSPAN="100%"><TABLE WIDTH="100%" CELLSPACING="0" CELLPADDING="0" BORDER="0">
                            <TR>
                              <TD WIDTH="3%" height="29"></TD>
                              <TD WIDTH="94%" class="menuTitle" align="center">Page Blocked</TD>
                              <TD WIDTH="3%"></TD>
                            </TR>
                          </TABLE></TD>
                      </TR>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
          <tr>
                              <TD width="5%">&nbsp;</TD>
                              <TD width="90%" class="text3">Access to the requested site has been restricted  due to its contents.</TD>
                              <TD width="5%">&nbsp;</TD>
                            </tr>
                            <tr>
                              <TD width="5%" height="40"></TD>
                              <TD width="90%" class="text3"><span id="customText"></span></TD>
                              <TD width="5%"></TD>
                            </tr>
          <tr>
            <td height="50" width="5%">&nbsp;</td>
            <td class="text3" width="90%"><table class="text3" cellpadding="0" cellspacing="0" width="100%" align="left">
                <tr>
                  <td width="90%"><strong>URL/Content: </strong><span id="url"></span></td>
                  <td width="10%"></td>
                </tr>
                <tr>
                  <td width="90%"><strong>Description: </strong><span id="description"></span></td>
                  <td width="10%"></td>
                </tr>
                <tr>
                  <td width="90%"><strong>Group Number: </strong><span id="groupNumber"></span></td>
                  <td width="10%"></td>
                </tr>
                <tr>
                  <td width="90%"><strong>Ip Address: </strong><span id="ipAddress"></span></td>
                  <td width="10%"></td>
                </tr>
              </table></td>
            <td width="5%">&nbsp;</td>
          </tr>
          <tr>
            <td align="center" height="250" colspan="100%"><img src="block.gif" /></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td class="bodyCell"><table width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td width="100%" align="center"><span id="loginDifferentUser"></span></td>
          </tr>
          <tr>
            <td height="15" colspan="100%"></td>
          </tr>
        </table></td>
    </tr>
    <FORM action="" method="POST" >
      <INPUT type="hidden" name="button">
                            <INPUT type="hidden" name="fullUrl">
                            <INPUT type="hidden" name="rem">
                            <INPUT type="hidden" name="contactEmail">
                            <INPUT type="hidden" name="gn">
      <tr>
        <td class="bodyCell"><table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td colspan="100%" height="10"></td>
            </tr>
            <tr>
              <td width="8%"></td>
              <td class="text3" colspan="13" id="exceptionColor"><strong><span id="exception1"></span></strong></td>
              <td width="22%"></td>
            </tr>
            <tr>
              <td colspan="100%" height="10"></td>
            </tr>
          </table></td>
      </tr>
      <tr>
        <td class="bodyCell"><table width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td width="20%"></td>
        <td class="text3" width="10%"><strong><span id="exception5"></span></strong>&nbsp;</td>
        <td class="text3" width="3%"></td>
        <td width="32%" align="left"><span id="exception6"></span></td>
        <td class="text3" width="5%"></td>
        <td width="27%" valign="bottom"></td>
        <td width="3%">&nbsp;</td>
      </tr>
      <tr>
        <td width="20%"></td>
        <td class="text3" width="10%"><strong><span id="exception2"></span></strong>&nbsp;</td>
        <td class="text3" width="3%"></td>
        <td width="32%" align="left"><span id="exception3"></span></td>
        <td class="text3" width="5%"></td>
        <td width="27%" valign="bottom"><span id="exception4"></span></td>
        <td width="3%">&nbsp;</td>
      </tr>
      <tr>
        <td height="15" colspan="100%"></td>
      </tr>
    </table></td>
      </tr>
    </FORM>
    <tr>
      <td bgcolor="#00161A" height="50">&nbsp;</td>
    </tr>
  </table>
</center>

</body>
</html>
