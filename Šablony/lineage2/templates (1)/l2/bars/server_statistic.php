<span id="server_statistic">. . : : TOP PVP : : . .
    </span>
<?php 
function connect() 
{ 
include "config/database.php";
}
$FORM = "" ;
$FORM2 = "" ; 
$query_chars = "select char_name,classid,pvpkills from characters WHERE accesslevel>=0 AND pvpkills >= 1 order by pvpkills desc limit 5;"; 
$query_chars2 = "select char_name,classid,pkkills from characters WHERE accesslevel>=0 AND pkkills >= 1 order by pkkills desc limit 5;";
connect(); 
$link = mysql_query($query_chars); 
$link2 = mysql_query($query_chars2);
$i=1;
$i2=1; 
$r=255;
$r2=255;
while ( $row2=mysql_fetch_row($link2) ) 
{ 
    $query2 = "select classname from char_templates where classid=$row2[1]"; 
    $link3 = mysql_query($query2); 
    $FORM2 .= "<table width=181><tr> 
   <td><div align=left><font color=#808080><b>$i2.</b></font></div></td>
   <td width=211><div align=center>$row2[0]</div></td>
   <td><div align=right><font color=#FF0000>$row2[2]</font></div></td>
    </tr></table>"; 
    $i2++; 
    $r2 -= 0; 
}   
while ( $row=mysql_fetch_row($link) ) 
{ 
    $query = "select classname from char_templates where classid=$row[1]"; 
    $link2 = mysql_query($query); 
    $FORM .= "<table width=181><tr> 
   <td><div align=left><font color=#808080><b>$i.</b></font></div></td>
   <td width=211><div align=center>$row[0]</div></td>
   <td><div align=right><font color=#FF33FF>$row[2]</font></div></td>
    </tr></table>"; 
    $i++; 
    $r -= 0; 
}  
mysql_close(); 
echo $FORM; 
                                    ?>
<br>
<center><b>
    <font color="#FF0000">. . : : TOP PK : : . .
    </font></b></center>                                    
<?php  
echo $FORM2; 
                                    ?> 