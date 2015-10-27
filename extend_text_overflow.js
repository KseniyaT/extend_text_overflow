;(function($){
  $.fn.extend_text_overflow = function(options){
    var defaults = {
      targetContainerClass: '.description'
    };

    options = $.extend(defaults, options);

    this.each(function(){
      var obj = $(this)
        , target_container_class = options.targetContainerClass
        ;
      var element_height = parseInt($(obj).height())
        , line_height = parseInt($(obj).css('line-height'))
        , font_size = parseInt($(obj).css('font-size'))
        , element_container = $(obj).closest(target_container_class)
        , container_height = parseInt($(element_container).height())
        ;
      if (line_height >= font_size) {
        line_height = line_height;
      } else {
        line_height = font_size;
      }

      var line_count = parseInt(element_height/line_height)
        , container_line_count = parseInt(container_height/line_height)
        ;

      if (container_line_count < line_count) {
        var new_element_height = container_line_count*line_height;
        $(obj).height(new_element_height).css('overflow','hidden');
        var dif =  new_element_height/element_height
          , symbols_count = $(obj).text().length
          , last_symbol_number = parseInt((symbols_count+1)*dif)
          ;
        var new_text = $(obj).text().substring(0, last_symbol_number) + ' ...';
        $(obj).text(new_text);
      }

    });
  }
})(jQuery);