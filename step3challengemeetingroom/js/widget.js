$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var emstatusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        emstatusHTML +='<li class="in">';
      } else {
        emstatusHTML +='<li class="out">';
      }
      emstatusHTML += employee.name + '</li>';
    });
    emstatusHTML += '</ul>';
    $('#employeeList').html(emstatusHTML)
  }); // end getJSON
}); // end ready

//----------------------------------------------


$(document).ready(function () {
  $.getJSON('../data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';
    $.each(data,function (index, room) {
      if (room.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)
  }); // end getJSON
}); // end ready