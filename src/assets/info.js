(function() {
    var ImageControl;
  
    ImageControl = (function() {
      return function() {
        this.init = function(args) {
          var imageContainer, mainContainer, patternImage, zoomSlider, zoomSliderContainer;
          this.originalArgs = args;
          mainContainer = $(args.container).css({
            position: 'relative',
            'max-width': args.containerSize,
            height: args.containerSize,
            overflow: 'hidden'
          });
          imageContainer = $('<div />').css({
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'move'
          });
          patternImage = $('<div />').attr({
            class: 'pattern-background-image'
          }).css({
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            'background-size': "100%",
            'background-repeat': 'no-repeat',
            'background-position': "0% 0%",
            'background-image': `url('${args.backgroundPattern}')`
          });
          zoomSlider = $("<input value='70'>");
          imageContainer.append(patternImage);
          mainContainer.append(imageContainer);
          this.patternImage = patternImage;
          return imageContainer.on('mousedown touchstart', function(e) {
            var containerSize, elepos, mousedown, patternBackground, patternBackgroundWidth, zoomLevel;
            e.preventDefault();
            patternBackground = $(this).find('.pattern-background-image');
            patternBackgroundWidth = patternBackground.width();
            mousedown = {
              x: e.originalEvent.pageX || e.originalEvent.touches[0].pageX,
              y: e.originalEvent.pageY || e.originalEvent.touches[0].pageY
            };
            elepos = {
              x: parseFloat(patternBackground.css("backgroundPosition").split(" ")[0].replace('%', '')),
              y: parseFloat(patternBackground.css("backgroundPosition").split(" ")[1].replace('%', ''))
            };
            zoomLevel = parseInt(zoomSlider.val());
            containerSize = parseInt(patternBackgroundWidth);
            $(document).on('mouseup touchend', function(e) {
              return $(document).unbind('mousemove touchmove');
            });
            return $(document).on('mousemove touchmove', function(e) {
              var actualMovePercentage, mousepos, movePercentage;
              mousepos = {
                x: e.originalEvent.pageX || e.originalEvent.changedTouches[0].pageX || mousedown.x,
                y: e.originalEvent.pageY || e.originalEvent.changedTouches[0].pageY || mousedown.y
              };
              if (mousedown !== mousepos) {
                movePercentage = {
                  x: (100 * (mousepos.x - mousedown.x)) / patternBackgroundWidth,
                  y: (100 * (mousepos.y - mousedown.y)) / patternBackgroundWidth
                };
                actualMovePercentage = {
                  x: (0.7 / (1 - (zoomLevel / 100))) * movePercentage.x,
                  y: (0.7 / (1 - (zoomLevel / 100))) * movePercentage.y
                };
                patternBackground.css({
                  'background-position': `${elepos.x + actualMovePercentage.x}% ${elepos.y + actualMovePercentage.y}%`
                });
              }
            });
          });
        };
      };
    })();
  
    $(document).ready(function() {
      var imageControl;
      imageControl = new ImageControl();
      imageControl.init({
        container: '.container',
        containerSize: '100%',
        backgroundPattern: 'https://www.linkpicture.com/q/info_bg.png'
      });
    });
  
  }).call(this);
  
  