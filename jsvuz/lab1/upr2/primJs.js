a = "background-color:#becffa; color:#ff0841;"
a += "font-size:24pt; font-family:cursive"
naim = 'Сеть магазинов "ВСЁ ДЛЯ ДОМА"'
let da = new Date()
d = ((da.getDate()<10)?"0"+da.getDate():da.getDate()) + "." + (da.getMonth() + 1) + "." + da.getFullYear()
document.write('<P align=center style= "' + a + '">' +
  naim + '</p><P>' + '<center>' + 'Сегодня ' + d + '</center>' + '</p>')