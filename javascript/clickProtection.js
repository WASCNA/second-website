var clickFlag = false;

function checkClickFlag(timeout)
{
   if (!clickFlag)
   {
      clickFlag = true;
      if ( isNaN(timeout) )
         brokenHref(10000);
      else
         brokenHref(timeout);

      return true;
   }
   else
   {
      alert('Please wait a moment and try again - your previous request is still being processed.');
      return false;
   }
}

var errorFlag;
function brokenHref(timeout)
{
   errorFlag = setTimeout("clickFlag = false;",timeout);
}
