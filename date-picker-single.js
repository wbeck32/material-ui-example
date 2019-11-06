(function() {
  /**
   * This function is used by both Single date picker and Range Date Picker
   * from arrays and functions creates the basic calendar table
   * creates a string from the array Day.fromDate
   * @param Func toHuman - outoputs the selected date to a string from toSlashed
   */
  //get current Month
  var Day = function(month, number) {
    this.month = month;
    this.number = number;
  };
  Day.pad = function(s) {
    return ("0" + s).slice(-2);
  };
  //Make string MM/DD/YYYY from Calendar array
  Day.fromString = function(str) {
    if (str === "" || str === undefined) return undefined;
    var parts = str.split("-");
    var year = parseInt(parts[0]);
    var month = parseInt(parts[1]);
    var day = parseInt(parts[2]);
    if (isNaN(year) || isNaN(month) || isNaN(day)) return undefined;
    return new Day(new Month(year, month), day);
  };
  Day.fromDate = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return new Day(new Month(year, month), day);
  };
  Day.now = function() {
    return Day.fromDate(new Date());
  };
  Day.prototype = {
    constructor: Day,
    daysFromNow: function(days) {
      var date = this.toDate();
      var time = date.getTime();
      var newTime = time + (days * 86400000);
      return Day.fromDate(new Date(newTime));
    },
    toDate: function() {
      return new Date(this.month.year, this.month.number - 1, this.number);
    },
    toString: function() {
      var year = this.month.year;
      var month = Day.pad(this.month.number);
      var day = Day.pad(this.number);
      return [year, month, day].join("-");
    },
    //value that is output into field
    toHuman: function() {
      return Month.outputMonthAbbreviation[this.month.number - 1] + "/" + this.number + "/" + this.month.year;
    },
    toSlashed: function() {
      return [this.month.number, this.number, this.month.year].join("/");
    }
  };
  var Month = function(year, number) {
    this.year = year;
    this.number = number;
    this.dayCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  };
  //Calendar Arrays of Dates and outputted months
  //This is shared between the date picker range and the single date picker calendar
  Month.names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  Month.outputMonthAbbreviation = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  Month.prototype = {
    constructor: Month,
    name: function() {
      return Month.names[this.number - 1] + " " + this.year;
    },
    shortName: function() {
      return Month.outputMonthAbbreviation[this.number - 1] + " " + this.year;
    },
    dayCount: function() {
      if (this.number == 2 && this.isLeapYear()) return 29;
      return this.dayCounts[this.number - 1];
    },
    isLeapYear: function() {
      return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    },
    firstDay: function() {
      return new Date(this.year, this.number - 1, 1);
    },
    firstDayOfTheWeek: function() {
      return this.firstDay().getDay();
    },
    previous: function() {
      if (this.number == 1) {
        return new Month(this.year - 1, 12);
      } else {
        return new Month(this.year, this.number - 1);
      }
    },
    next: function() {
      if (this.number == 12) {
        return new Month(this.year + 1, 1);
      } else {
        return new Month(this.year, this.number + 1);
      }
    }
  };
  var Calendar = function(month, i) {
    this.month = month;
    this.$singlePickerCalendarElement = $("<table class='calendars navigatable_table' role='application' aria-label='Calendar view date-picker' ></table>");
  };
  /*
   * This function used by both Single date picker and Range Date Picker
   * initializes and applies the previous calendar object
   * @param applySingle adds selected state for single date picker
   * @param applyRange adds selected state for range date picker 
   */
  Calendar.prototype = {
    constructor: Calendar,
    // Date Picker Single Calender selection
    applySingle: function(singleDateSelection, isSelecting) {
      var now = Day.now().toDate(),
        maxToSingle = singleDateSelection.from.daysFromNow(singleDateSelection.maxDays - 336).toDate();
      var monthName = this.month.name();
      this.$singlePickerCalendarElement.find("[data-date]").each(function(index) {
        var $this = $(this);
        var day = Day.fromString($this.data("date"));
        var date = day.toDate();
        var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        Date.prototype.getDayName = function() {
          return weekdays[this.getDay()];
        };
        var dayName = date.getDayName();
        var weekDayAnnounced = Day.pad(day) + ", " + monthName + " " + dayName;
        if (date) {
          $this.attr('aria-label', weekDayAnnounced);
        }
        if (singleDateSelection.includes(day)) {
          $this.addClass("selected").attr('aria-selected', 'true');
        } else {
          $this.removeClass("selected").attr('aria-selected', 'false');
        }
        if (date <= now) {
          $this.addClass("grey");
        } else {
          $this.addClass('disabled').attr('disabled', 'true');
        }
        if (date < now || (isSelecting && (date > singleDateSelection.from.toDate() || date > maxToSingle))) {
          $this.addClass("disabled").attr('disabled', 'true');
          $this.removeAttr('href');
        } else {
          $this.removeClass("disabled");
          $this.removeAttr('disabled', 'true');
        }
      });
    },
    render: function() {
      var day = 1,
        weeks = "<tr role='presentation'>",
        chrome = "",
        date = "";
      // Loop over weeks
      for (var i = 0; i <= 6; i++) {
        // Loop over days of the week
        //Layout of the table to span 7 days
        for (var j = 0; j <= 6; j++) {
          weeks += "<td>";
          date = this.month.year + "-" + Day.pad(this.month.number) + "-" + Day.pad(day);
          if (day <= this.month.dayCount() && (i > 0 || j >= this.month.firstDayOfTheWeek())) {
            weeks += "<a href='#' class='day' role='button' data-date='" + date + "'>" + day + "</a>";
            day++;
          }
          weeks += "</td>";
        }
        // Stop if we are out of days
        if (day > this.month.dayCount()) {
          break;
        } else {
          weeks += "</tr><tr  role='presentation'>";
        }
      }
      weeks += "</tr>";
      chrome += "<thead>";
      chrome += "<tr><th class='month' colspan='7'>" + this.month.name() + "</th></tr>";
      chrome += "<tr><th scope='col' class='ui-datepicker-week-end'><span title='Sunday'>Su</span></th><th scope='col'><span title='Monday'>Mo</span></th><th scope='col'><span title='Tuesday'>Tu</span></th><th scope='col'><span title='Wednesday'>We</span></th><th scope='col'><span title='Thursday'>Th</span></th><th scope='col'><span title='Friday'>Fr</span></th><th scope='col' class='ui-datepicker-week-end'><span title='Saturday'>Sa</span></th></tr><";
      chrome += "</thead>";
      chrome += "<tbody>" + weeks + "</tbody>";
      this.$singlePickerCalendarElement.html(chrome);
    },
    onSelect: function(handler) {
      this.$singlePickerCalendarElement.on("click", "a[data-date]:not(.disabled)", function() {
        var day = Day.fromString($(this).data("date"));
        handler(day);
        closeCalendarModal();
      });
    }
  };
  /**
   * Single Date Picker
   * only allows for one date to be picked
   * creates a string from the array Day.fromDate
   * @param singleControl generates the Calendar trigger, input fileds, and modal
   */
  var dateSingleChoice = function(from, to) {
    this.from = from;
    this.to = to;
  };
  dateSingleChoice.default = function() {
    var now = Day.now();
    return new dateSingleChoice(now.daysFromNow(0), now);
  };
  dateSingleChoice.prototype = {
    constructor: dateSingleChoice,
    isValid: function() {
      if (this.from === undefined) return false;
      return true;
    },
    includes: function(day) {
      if (!this.isValid()) return false;
      var date = day.toDate();
      return (this.from.toDate() <= date && this.to.toDate() >= date);
    }
  };
  // Creates the  Single Date Picker Object
  //Dynamcially adds in the html for the Calendar Contents
  var singleControl = function(parent, options) {
    var that = this,
      singleDateSelection;
    this.options = options || {};
    singleDateSelection = new dateSingleChoice(Day.fromString(this.options.from));
    this.singleDateSelection = singleDateSelection.isValid() ? singleDateSelection : dateSingleChoice.default();
    this.calendars = [];
    this.visibleMonth = this.singleDateSelection.to.month;
    this.isSelecting = false;
    this.$parent = $(parent);
    this.$calendarsingleControl = $("<div class='calendar-control'></div>");
    this.$datePickerButton = $("<a href='#' id='singlePickerTrigger' class='icon-calendar-small'  aria-expanded='false' aria-label='calendar picker'></a></div>");
    this.$dateRangeResult = $("<label for='single-date'>Date:(mm/dd/yyyy format)</label><input id='single-date'  value='MM/DD/YYY' class='date-picker-field' name='date'>");
    this.$calendarModal = $("<div class='calendar_modal --small'></div>");
    this.$previous = $("<button  id='previous' class='icon-chevron-back previous' aria-label='Previous month'></button>");
    this.$next = $("<button  id='next' class='icon-chevron-forward next' aria-label='Next month'> </button>");
    this.$calendars = $("<div id='datePickerSingle-calendar' class='calendar-group'></div>");
    this.$calendarsingleControl.append(this.$dateRangeResult);
    this.$calendarsingleControl.append(this.$datePickerButton);
    this.$calendarsingleControl.append(this.$calendarModal);
    this.$calendarModal.append(this.$previous);
    this.$calendarModal.append(this.$next);
    this.$calendarModal.append(this.$calendars);
    this.$parent.html(this.$calendarsingleControl);
    this.$datePickerButton.on("click", function(e) {
      openCalendarModal();
      disablePreviousButton();
      return false;
    });
    this.calendarNavButtons();
    this.render();
    this.bindHandlers();
  };
  //single Date picker 
  //Updates the day form field using the single date picker object
  // sets up controls to move next month and previous month shiftNext() and shiftPrevious()
  singleControl.prototype = {
    constructor: singleControl,
    renderCalendars: function() {
      var that = this,
        calendarCurrent = new Calendar(this.visibleMonth),
        calendarNext = new Calendar(calendarCurrent.month.next());
      // Define calendar set
      this.calendars = [calendarCurrent, calendarNext];
      // Render the calendars
      for (var i = 0; i < this.calendars.length; i++) {
        this.calendars[i].render();
      }
      // Bind events
      $.each(this.calendars, function(index) {
        this.onSelect(function(day) {
          that.singleDateSelection.to = day;
          if (that.isSelecting) {
            that.isSelecting = true;
          } else {
            that.singleDateSelection.from = day;
            that.isSelecting = false;
          }
          that.render();
        });
      });
      var i = 0;
      // Place rendered calendars on the DOM
      this.$calendars.html("");
      for (var a = 0; a < this.calendars.length; a++) {
        this.$calendars.append(this.calendars[a].$singlePickerCalendarElement);
      }
      $('table').each(function() {
        i++;
        var newID = 'calendar-' + i;
        var currentID = 'calendar-current-' + i;
        if ($(this) == new Calendar(this.visibleMonth)) {
          $(this).attr('id', currentID);
        } else {
          $(this).attr('id', newID);
          $(this).val(i);
        }
      });
    },
    updateFrom: function(from) {
      this.singleDateSelection.from = Day.fromDate(new Date(from));
      if (this.singleDateSelection.isValid()) {
        this.applySingle(this.singleDateSelection);
        this.$parent.data("from", this.singleDateSelection.from.toString());
      }
    },
    applySingle: function(singleDateSelection) {
      // Update calendars
      for (var i = 0; i < this.calendars.length; i++) {
        this.calendars[i].applySingle(this.singleDateSelection, this.isSelecting);
      }
    },
    //output single date
    render: function() {
      this.renderCalendars();
      this.applySingle();
      this.$parent.data("from", this.singleDateSelection.from.toString());
      this.$dateRangeResult.val(this.singleDateSelection.from.toHuman());
      var defaultValue = this.$dateRangeResult.val();
      $(this.$dateRangeResult).blur(function() {
        if ($(this).val().length === 0) {
          $(this).val(defaultValue);
        }
      });
      return this;
    },
    setVisibleMonth: function(month) {
      this.visibleMonth = month;
      this.render();
    },
    shiftNext: function() {
      this.setVisibleMonth(this.visibleMonth.next());
      return this;
    },
    shiftPrevious: function() {
      this.setVisibleMonth(this.visibleMonth.previous());
      return this;
    },
    getsingleDateSelection: function() {
      return this.singleDateSelection;
    }
  };
  var openCalendarModal = function(e) {
    var $calendarModal = $(".calendar_modal");
    var $datePickerButton = $('#singlePickerTrigger');
    //ensure focus remains on the dialog
    $calendarModal.toggleClass('open').attr('aria-hidden', 'false');
    $calendarModal.find('.selected').focus();
    if ($calendarModal.hasClass('open')) {
      $datePickerButton.attr('aria-expanded', 'true');
      $calendarModal.attr('aria-hidden', 'false');
    } else {
      $datePickerButton.attr('aria-expanded', 'false');
      $calendarModal.attr('aria-hidden', 'true');
    }
    return false;
  };
  var closeCalendarModal = function() {
    var $datePickerButton = $('#singlePickerTrigger');
    var $calendarModal = $(".calendar_modal");
    $calendarModal.removeClass('open').attr('aria-hidden', 'true');
    if ($calendarModal.hasClass('open')) {
      $datePickerButton.attr('aria-expanded', 'true');
    } else {
      $datePickerButton.attr('aria-expanded', 'false');
    }
    $datePickerButton.focus();
    return false;
  };
  var disablePreviousButton = function() {
    var allTableDays = $(".calendar_modal").find("a[data-date]");
    if (allTableDays.hasClass('disabled') || allTableDays.hasClass('grey')) {
      $('#previous').addClass("disabled").attr('disabled', 'true');
    }
  };
  singleControl.prototype.calendarNavButtons = function(e) {
    var that = this;
    this.$previous.on("click", function(e) {
      var calendarTableOne = $('#calendar-1'),
        calendarTable = $(".navigatable_table"),
        calendarTableTwo = $('#calendar-2');
      var lastDayOfTheMonth = $(calendarTable).find("tr:first-of-type a")[0];
      if ($(calendarTable).is(calendarTableOne) && $(calendarTableOne).find("a[data-date]").hasClass('selected')) {
        that.shiftPrevious();
        var firstDayOfFirstsMonth = $(".navigatable_table").find("tr:first-of-type a")[0];
        firstDayOfFirstsMonth.focus();
        $(firstDayOfFirstsMonth).addClass("selected").attr('aria-selected', 'true');
        var allTableDays = $(".calendar_modal").find("a[data-date]");
        if (allTableDays.hasClass('disabled') || allTableDays.hasClass('grey')) {
          that.$previous.addClass("disabled").attr('disabled', 'true');
          var currentDay = $(".navigatable_table").find(".grey:not(.disabled)");
          $(currentDay).addClass("selected").attr('aria-selected', 'true');
          $(currentDay).focus();
          e.preventDefault();
        }
      } else if ($(calendarTable).is(calendarTableTwo) && $(calendarTableTwo).find("a[data-date]").hasClass('selected')) {
        that.shiftPrevious();
        disablePreviousButton();
        var firstDayOfLastMonth = $(".navigatable_table").next(calendarTable).find("tr:first-of-type a")[0];
        var $currentday = $('.grey');
        $($currentday).removeClass("selected");
        firstDayOfLastMonth.focus();
        $(firstDayOfLastMonth).addClass("selected").attr('aria-selected', 'true');
      } else {
        this.$previous.addClass("disabled").attr('disabled', 'true');
      }
      return false
    });
    this.$next.on("click", function(e) {
      var calendarTableOne = $('#calendar-1'),
        calendarTable = $(".navigatable_table"),
        calendarTableTwo = $('#calendar-2');
      disablePreviousButton();
      if ($(calendarTable).is(calendarTableOne) && $(calendarTableOne).find("a[data-date]:not(.disabled)").hasClass('selected')) {
        that.shiftNext();
        that.$previous.removeClass("disabled").removeAttr('disabled', 'true');
        var firstDayOfFirstsMonth = $(".navigatable_table").find("tr:first-of-type a")[0];
        firstDayOfFirstsMonth.focus();
        $(firstDayOfFirstsMonth).addClass("selected").attr('aria-selected', 'true');
      } else if ($(calendarTable).is(calendarTableTwo) && $(calendarTableTwo).find("a[data-date]:not(.disabled)").hasClass('selected')) {
        that.shiftNext();
        that.$previous.removeClass("disabled").removeAttr('disabled', 'true');
        var firstDayOfLastMonth = $(".navigatable_table").next(calendarTableTwo).find("tr:first-of-type a")[0];
        firstDayOfLastMonth.focus();
        $(firstDayOfLastMonth).addClass("selected").attr('aria-selected', 'true');
      } else {
        return false;
      }
      return false;
    });
  }
  /* single Date picker 
  //Updates the day form field using the single date picker object
  // the Keyboard Support controls are:
  Left: Move focus to the previous day. Will move to the last day of the previous month, if the current day is the first day of a month.
  Right: Move focus to the next day. Will move to the first day of the following month, if the current day is the last day of a month.
  Tab: Navigate between calander selected date and previous/next selection buttons
  Enter: Select date
  Escape: close the calendar picker
  */
  singleControl.prototype.calendarKeyEvents = function(e) {
    var cancel = false;
    var days = this.$calendars.find('a[data-date]:not(.disabled)');
    var start = $(".selected");
    var allTableDays = $(".calendar_modal").find("a[data-date]");
    var activeDay = start;
    this.keys = {
      tab: 9,
      esc: 27,
      left: 37,
      right: 39,
    };
    disablePreviousButton();
    //Shared set focus on elements function
    function setDayFocus(sibling) {
      start.addClass("selected");
      if (sibling !== null) {
        start.removeClass("selected").attr('aria-selected', 'false');
        sibling.focus();
        sibling.addClass("selected").attr('aria-selected', 'true');
        start = sibling;
        setTimeout(function() {
          sibling.focus();
        }, 100);
        return false;
      }
    }
    // First day of Next month focused
    function selectNextMonthDay() {
      $('#previous').removeClass("disabled").removeAttr('disabled', 'true');
      var firstDayOfTheMonth = $(".navigatable_table").next('.navigatable_table').find("tr:first-of-type a[data-date]:not(.disabled)")[0];
      firstDayOfTheMonth.focus();
      $(firstDayOfTheMonth).addClass("selected").attr('aria-selected', 'true');
      start = firstDayOfTheMonth;
    }
    // First day of Previous month focused
    function selectPrevMonthDay() {
      var nextTableDays = $(".navigatable_table").prev('.navigatable_table').find("a[data-date]:not(.disabled)");
      var lastDayOfTheMonth = nextTableDays[nextTableDays.length - 1];
      var $currentday = $('.grey');
      $(lastDayOfTheMonth).focus();
      $($currentday).removeClass("selected");
      $(lastDayOfTheMonth).addClass("selected").attr('aria-selected', 'true');
    }
    switch (e.keyCode) {
      case this.keys.esc:
        {
          closeCalendarModal();
          cancel = true;
          break;
        }
      case this.keys.left:
        {
          var dayPrevIndex = days.index(start) - 1;
          var $prevDay = null;
          if (dayPrevIndex >= 0) {
            $prevDay = days.eq(dayPrevIndex);
            setDayFocus($prevDay);
            e.preventDefault();
          } else if ($(e.target).hasClass('grey')) {
            return false;
            e.stopPropagation();
          }
          // move to appropriate day in previous month
          else {
            if ($(e.target).hasClass('previous')) {
              return false;
              e.stopPropagation();
            }
            this.shiftPrevious();
            selectPrevMonthDay();
            e.stopPropagation();
          }
          e.stopPropagation();
          return false;
        }
      case this.keys.right:
        {
          var dayNextIndex = days.index(start) + 1;
          var $nextDay = null;
          if (dayNextIndex < days.length) {
            $nextDay = days.eq(dayNextIndex);
            setDayFocus($nextDay);
          }
          // move to appropriate day in next month
          else {
            if ($(e.target).hasClass('next')) {
              return false;
              e.preventDefault();
            }
            this.shiftNext();
            selectNextMonthDay();
          }
          e.stopPropagation();
          return false;
        }
      case this.keys.tab:
        {
          disablePreviousButton();
          e.preventDefault();
          var selectedDate = $(".navigatable_table").find('.selected:not(.disabled)');
          if (this.$previous.hasClass('disabled')) {
            if ($(e.target).hasClass('selected')) {
              $(this.$next)[0].focus();
            } else if ($(e.target).hasClass('next')) {
              $(selectedDate)[0].focus();
            }
          } else {
            if ($(e.target).hasClass('selected')) {
              $(this.$previous)[0].focus();
            } else if ($(e.target).hasClass('previous')) {
              $(this.$next)[0].focus();
            } else if ($(e.target).hasClass('next')) {
              $(selectedDate)[0].focus();
            }
          }
        }
    }
  };
  //Bind handlers to Single Calendar Objectå
  singleControl.prototype.bindHandlers = function() {
    var thisObj = this;
    this.$calendarModal.keydown(function(e) {
      return thisObj.calendarKeyEvents(e);
    });
  };
  //Initalize the single datepicker
  $.fn.datePickerSingle = function(options) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data('datePickerSingle');
      if (!data) $this.data('datePickerSingle', (data = new singleControl(this, options)));
      if (typeof options === 'string') return data[options].call(data);
      //Mobile Function to change the date picker type to date
      function mobileViewUpdate() {
        var viewportWidth = $(window).width();
        var date = $('.date-picker-field');
        var dateTrigger = $('#singlePickerTrigger');
        if (viewportWidth < 600) {
          // do mobile handling
          date.attr('type', 'date');
          dateTrigger.addClass("disabled").attr('disabled', 'true');
          dateTrigger.removeAttr('href');
          return false;
        } else {
          date.attr('type', 'text');
           dateTrigger.removeClass("disabled").removeAttr('disabled', 'true');
          dateTrigger.attr('href', '#');

        }
      }
      $(window).load(mobileViewUpdate);
      $(window).resize(mobileViewUpdate);
    });
  };
}());
/**
 * Es6 exports
 * nativeElement dynamically allows for any class name to be appended with Single, or Range datepicker
 * Must import both funcs into parent sheet 
 */
export default function datePickerSingleInit(nativeElement) {
  $(nativeElement).datePickerSingle();
}
export {
  datePickerSingleInit
};