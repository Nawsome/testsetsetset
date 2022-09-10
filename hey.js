var mydate=new Date()
var year=mydate.getYear()
if (year < 1000)
    year+=1900
    var day=mydate.getDay()
    var month=mydate.getMonth()
    var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
document.write("<div style='outline: none;height: 40px;text-align: center;width: 260px;border-radius: 80px;background: #fff;border: 2px solid #121518;color: #121518;letter-spacing: 1px;text-shadow: 0;font-size: 24px;font-weight: bold;cursor: pointer;transition: all 0.25s ease;'><a href='https://sites.google.com/view/nghhub' title='TodayÂ´s date'>Today's date is "+montharray[month]+" "+daym+", "+year+"</a></div>")
