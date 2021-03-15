export default class Comment {
    constructor(name, a1_score, a2_score, a3_score, a4_score, route_score, comment) {
      this.name = name;
      this.a1_score = a1_score;
      this.a2_score = a2_score;
      this.a3_score = a3_score;
      this.a4_score = a4_score;
      this.route_score = route_score;
      this.comment = comment;
      this.date = formatDate();
    }
  }


// Esta función se encarga de devolver la fecha actual con formato dd/mm/yyyy hh:mm
function formatDate() {
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if(h<10){h='0'+h;}
    if(m<10){m='0'+m;}
    if(s<10){s='0'+s;}

    var date = day + '/' + month + '/' + year + '  ' + h + ':' + m + ':' + s;   

    return date;
}