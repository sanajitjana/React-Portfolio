(function ($) {
  "use strict";

  var $body = $("body"),
    $window = $(window);

  /*============================= Navigation Section ==============================*/

  $window.on("scroll", function () {
    if ($(".navbar").offset().top > 25) {
      $(".navbar-default").addClass("small");
    } else {
      $(".navbar-default").removeClass("small");
    }
  });

  /*============================= Smoothscroll js ==============================*/

  $(".navbar-default").on("click", "a[href*='#']", function (event) {
    var $anchor = $(this);
    var rawHref = $anchor.attr("href") || "";
    var hashIndex = rawHref.indexOf('#');
    var targetSelector = hashIndex >= 0 ? rawHref.substring(hashIndex) : "";
    if (!targetSelector || targetSelector === "#") {
      return; // let default work for empty hashes if any
    }
    var $target = $(targetSelector);
    if (!$target.length || !$target.offset()) {
      return; // target not found
    }
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();

    var headerHeight = ($('.navbar:visible').outerHeight() || 0);
    var destination = Math.max(0, $target.offset().top - headerHeight - 8);
    $("html, body")
      .stop()
      .animate(
        { scrollTop: destination },
        800,
        "swing",
        function () {
          // After scrolling, update active section class
          setActiveSection($target);
        }
      );
  });

  // Add smooth active-state transitions between sections referenced by navbar links
  function collectNavTargets() {
    var ids = [];
    $(".navbar-default a[href^='#']").each(function () {
      var href = $(this).attr("href");
      if (href && href.length > 1) {
        ids.push(href);
      }
    });
    // Deduplicate
    ids = ids.filter(function (value, index, self) { return self.indexOf(value) === index; });
    if (!ids.length) return $();
    return $(ids.join(","));
  }

  var $navTargets = collectNavTargets();
  if ($navTargets.length) {
    $navTargets.addClass("section-animated");
  }

  function setActiveSection($section) {
    if (!$section || !$section.length) return;
    if (!$navTargets.length) return;
    $navTargets.removeClass("section-active");
    $section.addClass("section-active");
  }

  function updateActiveSectionOnScroll() {
    if (!$navTargets.length) return;
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var bestSection = null;
    var bestScore = -Infinity;
    $navTargets.each(function () {
      var $el = $(this);
      var off = $el.offset();
      if (!off) return;
      var top = off.top;
      var height = $el.outerHeight();
      var bottom = top + height;
      var overlap = Math.max(0, Math.min(viewportBottom, bottom) - Math.max(viewportTop, top));
      // Prefer sections with more overlap; break ties by proximity to top
      var score = overlap - Math.abs(top - viewportTop) * 0.01;
      if (score > bestScore) {
        bestScore = score;
        bestSection = $el;
      }
    });
    if (bestSection) setActiveSection(bestSection);
  }

  /*====================================== jquery scroll spy ========================================*/

  $body.scrollspy({
    target: ".navbar-collapse",
    offset: 15,
  });

  // Update active section on scroll and on load
  $(window).on("scroll resize load", function () {
    updateActiveSectionOnScroll();
  });

  /*====================================== Fancybox ========================================*/

  $(".fancybox-buttons").fancybox({
    openEffect: "fade",
    closeEffect: "fade",
    prevEffect: "fade",
    prevSpeed: 550,
    nextEffect: "fade",
    nextSpeed: 550,
    closeBtn: true,
    helpers: {
      title: {
        type: "inside",
      },
      buttons: {},
    },
  });

  /*====================================== Fancybox-script ========================================*/

  $(".fancybox").fancybox();

  /*====================================== Mixit-up ========================================*/

  var filterList = {
    init: function () {
      // MixItUp plugin
      // http://mixitup.io
      $("#portfoliolist").mixItUp({
        selectors: {
          target: ".portfolio",
          filter: ".filter",
        },
        load: {
          filter: ".web, .graphics, .development, .photography",
        },
      });
    },
  };

  // Run the show!
  filterList.init();

  /*====================================== Parallex ========================================*/

  $(".parallax").scrolly({ bgParallax: true });
})(jQuery);

/*============================= Preload==============================*/

$(window).on("load", function () {
  "use strict";
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

/*======================================counter-up ========================================*/

$(".Count").each(function () {
  "use strict";
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 10000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
