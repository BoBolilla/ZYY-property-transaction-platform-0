$(function () {
  function onDomModified() {
    // tooltip
    $('[data-toggle="tooltip"]:not(.tooltip-inited)')
      .addClass('tooltip-inited')
      .tooltip();

    // clamp

    $('*[data-clamp]:not(.clamp-inited)').each(function () {
      var item = $(this);
      var mode = item.data('clamp');
      if (!mode) mode = 'auto';
      else {
        var _mode = Number(mode);
        if (_mode !== NaN) {
          mode = _mode;
        }
      }

      $clamp(this, {
        clamp: mode,
      });

      item.addClass('clamp-inited');
    });
  }
  $(document).on('DOMSubtreeModified', onDomModified);
  onDomModified();
});

$(function () {
  var btt = $('.back-to-top');
  btt.click(function () {
    $.smoothScroll({ offset: -100 });
  });
  $(document)
    .scroll(function () {
      if ($(this).scrollTop() > 100) {
        btt.removeClass('d-none').addClass('d-block');
      } else {
        btt.removeClass('d-block').addClass('d-none');
      }
    })
    .scroll();
  if ($('html[page-name="home"]').length > 0) {
    var swiper = new Swiper('.banner-swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    var swiper = new Swiper('.swiper-container-news', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
});
$(function () {
  if ($('html[page-name="events"]').length > 0) {
    var imgSwiper = new Swiper('.events-swiper-img', {
      loop: true,
      simulateTouch: false,
    });
    var contentSwiper = new Swiper('.events-swiper-content', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      controller: {
        control: imgSwiper,
      },
    });
  }
});

$(function () {
  var fontSizeSwitch = $('.font-size-switch');
  $('.btn-font-s').click(function () {
    var btn = $(this);
    fontSizeSwitch.find('button').removeClass('active');
    btn.addClass('active');
    $(btn.data('target')).css('font-size', '12px');
    $.cookie('fontSize', 's', { expires: 7, path: '/' });
  });
  $('.btn-font-m').click(function () {
    var btn = $(this);
    fontSizeSwitch.find('button').removeClass('active');
    btn.addClass('active');
    $(btn.data('target')).css('font-size', '14px');
    $.cookie('fontSize', 'm', { expires: 7, path: '/' });
  });
  $('.btn-font-b').click(function () {
    var btn = $(this);
    fontSizeSwitch.find('button').removeClass('active');
    btn.addClass('active');
    $(btn.data('target')).css('font-size', '16px');
    $.cookie('fontSize', 'b', { expires: 7, path: '/' });
  });
});

/**
 * @description: 首页市场热度表格自动滚动，2秒滚动一次
 * @return {*}
 * @author: ECLAIR
 */
$(function () {
  let text = $('#fTbody:first');
  let clear; //定义需要清除动画的部分
  $('#fTbody>tr:odd').addClass('odd');
  //添加鼠标悬停事件
  text
    .hover(
      function () {
        clearInterval(clear);
      },
      function () {
        clear = setInterval(function () {
          let findText = text.find('tr:first');
          let textHeight = findText.height();
          text.animate(
            {
              marginTop: -textHeight + 'px',
            },
            600,
            function () {
              //清除margin值
              findText.css('marginTop', 0).appendTo(text);
              text.css('marginTop', 0);
            }
          );
        }, 1200); //滚动间隔时间
      }
    )
    .trigger('mouseleave');
});

$('.close-icon').click(function () {
  $('.QRcode-wp').hide();
});
