$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
    $('select').styler();
});

$(document).ready(function () {
    window.onscroll = function () {
        myFunction();

    };
    let nav = document.querySelector("header");
    let prt = nav.parentElement;
    let sticky = nav.offsetTop+50;
    function myFunction() {
        let wdth = window.innerWidth
        if (wdth < 257) {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
                prt.classList.add('menu-change');

            } else {
                nav.classList.remove("sticky");
                prt.classList.remove('menu-change');
            }
        } else {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
                prt.classList.add('menu-change');
            } else {
                nav.classList.remove("sticky");
                prt.classList.remove('menu-change');
            }
        }
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
   if (scroll >= 300) {
       $(".comparison__stic").addClass("sticky-comp");
       $(".last-price__mob").addClass("last-price__act");
       $(".clinker-facing__mob").addClass("clinker-facing__act");
   }
   else {
       $(".last-price__mob").removeClass("last-price__act");
       $(".comparison__stic").removeClass("sticky-comp");
       $(".clinker-facing__mob").removeClass("clinker-facing__act");

   }
});

$(document).ready(function () {
    let time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'height': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }
    });
    $('.for-mobile-bg').on
    ('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});

if ($('.header__menu>ul>li').has('submenu')) {
    $('.submenu').parent().addClass('submenu__act');
}

$(document).ready(function () {
    $('.consult__inp label').on('click', function () {
        $(this).parent().addClass('active-closed');
    });
    $('.consult__text label').on('click', function () {
        $(this).parent().addClass('active-closed');
    });
    $('.remove__inp').on('click', function () {
        $(this).parent().removeClass('active-closed');
        $('.inp-name').val("");
    });
    $('.remove__phone').on('click', function () {
        $('.inp-phone').val("");
    });
    $('.remove__text').on('click', function () {
        $('.rem-textarea').val("");
    });
});




$('.open-menu-cat').on('click', function (e) {
    $('body').toggleClass('body-fix');
    $(this).toggleClass('catalog-goods__act');
    $('.min-block-catalog').toggleClass('catalog-menu__active');
    e.stopPropagation()
});

$(window).on('click', function (e) {
    $('body').removeClass('body-fix');
    let menuBLock = $('.min-block-catalog');
    if (e.target !== menuBLock) {
        menuBLock.removeClass('catalog-menu__active');
    }
});

$('.clinker__share').on('click', function () {
    $(this).parent().toggleClass('clinker-share__act')
});

$('.block-catalog__close').on('click', function () {
    $('body').removeClass('body-fix');
    $('.min-block-catalog').removeClass('catalog-menu__active');
    $('.cat-menu__cnt ul li').removeClass('cat-menu__sub');
});
$('.go-back__menu').on('click', function () {
    $('.cat-menu__cnt ul li').removeClass('cat-menu__sub');
});
$('.min-block-catalog').on('click', function (e) {
    e.stopPropagation();
});

$('.cat-menu__cnt ul li a').on('click', function (e) {
   $(this).parent().addClass('cat-menu__sub');
});

$(document).ready(function () {
    $('.increment').on('click', incrementsVal);
    $('.decrement').on('click', decrementVal);

    function incrementsVal() {
        let parent_val = $(this).parents('.add-catalog-for-shop');
        let input_val = $(parent_val).find('input[type=text]').val();
        input_val++;
        $(parent_val).find('input[type=text]').val(input_val)
    }
    function decrementVal() {
        let parent_val = $(this).parents('.add-catalog-for-shop');
        let input_val = $(parent_val).find('input[type=text]').val();
        input_val--;
        if (input_val <= 1) {
            $(parent_val).find('input[type=text]').val('1')
        } else {
            $(parent_val).find('input[type=text]').val(input_val)
        }
    }
});



$('.open_modal').on('click', function (e) {
    $('body').css({"overflow": "hidden"});

    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
    e.stopPropagation()
})

$('.close').on('click', function () {
    $('body').css({"overflow": "unset"});
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close_this').on('click', function () {
    $('body').css({"overflow": "unset"});
    let prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)
});
$(window).on('click', function (event) {
    $('body').css({"overflow": "unset"});
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});

$('.modal-registration').on('click', function (e){
    e.stopPropagation();
})
$('.material__pic').on('click', function () {
    $('.material__pic').removeClass('material__active');
    $(this).addClass('material__active');
});



$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

$('.all-charset').on('click', function () {
    $(this).toggleClass('all-charset__none')
    $('.char-the__text').removeClass('char-none__mob');
})

$('.modal-inp').on('click', function (){
    $(this).toggleClass('modal-inp__act');
});

$('.modal-textarea').on('click', function (){
    $(this).toggleClass('modal-inp__act');
});


$(document).ready(function () {
    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    })
    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        }
    }
});

$('.scr-treed').on('click', function (){
    $('.scr-cl').removeClass('scr__acts');
    $(this).addClass('scr__acts');
    $('.block-port').removeClass('block-acts');
    $('.block-treed').addClass('block-acts');
})

$('.scr-video').on('click', function (){
    $('.scr-cl').removeClass('scr__acts');
    $(this).addClass('scr__acts');
    $('.block-port').removeClass('block-acts');
    $('.block-video').addClass('block-acts');
})

$('.scr-photo').on('click', function (){
    $('.scr-cl').removeClass('scr__acts');
    $(this).addClass('scr__acts');
    $('.block-port').removeClass('block-acts');
    $('.block-photo').addClass('block-acts');
})

$('.treed-act-lin').on('click', function (){
    $('.scr-treed.scr-cl').addClass('scr__acts');
})
$('.video-act-lin').on('click', function (){
    $('.scr-video.scr-cl').addClass('scr__acts');
})
$('.clinker-slid__pic').on('click', function (){
    $('.scr-photo.scr-cl').addClass('scr__acts');
})

$('.show-more__check').on('click', function (){
    $(this).addClass('show-more__none')
    $('.ption-info').removeClass('none-check');
})


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();

        if (e.data.multiple) {
            $el.find('.submenu-ac').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $this.toggleClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});


$('.close-filter-in-mob').on('click', function (e) {
    $('body').toggleClass('fon__body');
    $('.catalog__left').toggleClass('catalog-filter-active');
    e.stopPropagation()
});
$('.catalog-filter-close').on('click', function () {
    $('body').removeClass('fon__body')
    $('.catalog__left').removeClass('catalog-filter-active')
});
$('.catalog__left').on('click', function (e) {
    e.stopPropagation()
});
$(window).on('click', function (e) {
    let menuSort = $('.catalog__left');
    if (e.target !== menuSort) {
        menuSort.removeClass('catalog-filter-active')
    }
});


$('body').on('click', function () {
    $('body').removeClass('fon__body');
});



$('.btn-registration').on('click', function () {
    $('.items-worth').toggleClass('items-worth__none');
    $('.checkout__padd').toggleClass('checkout__abs');
    $('.check-close__mob').toggleClass('check-close__act');
});

$('.check-close').on('click', function () {
    $('.items-worth').removeClass('items-worth__none');
    $('.checkout__padd').removeClass('checkout__abs');
    $('.check-close__mob').removeClass('check-close__act');
});



let sliders = document.getElementsByClassName('nonlinear');
for (let i = 0; i < sliders.length; i++) {
    let slid = sliders[i];
    noUiSlider.create(slid, {
        connect: true,
        behaviour: 'tap',
        start: [document.getElementById(slid.getAttribute('data-id') + '-lower-value').value, document.getElementById(slid.getAttribute('data-id') + '-upper-value').value],
        range: {
            'min': [parseInt(slid.getAttribute('data-min'))],
            'max': [parseInt(slid.getAttribute('data-max'))]
        },
    });
    document.getElementById(slid.getAttribute('data-id') + '-lower-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([this.value, null]);
    });
    document.getElementById(slid.getAttribute('data-id') + '-upper-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([null, this.value]);

    });
    slid.noUiSlider.on('slide', function (values, handle, unencoded, isTap, positions) {
        var nodes = [
            document.getElementById(this.target.getAttribute('data-id') + '-lower-value'), // 0
            document.getElementById(this.target.getAttribute('data-id') + '-upper-value'),  // 1
        ];
        nodes[handle].value = parseInt(values[handle]);
    });
    slid.noUiSlider.on('end', function (values, handle, unencoded, isTap, positions) {
        let data = $('form').serializeArray();
    });
}


$('.fav-cheap-first span').on('click', function (e) {
    e.stopPropagation();
});

$('.mod-cheap-first ul li').on('click', function () {
    $('.mod-cheap-first ul li').removeClass('cheap-first__act');
    $(this).addClass('cheap-first__act');

    let text_in = $('.fav-cheap-first span').html();
    let selected_text = $(this).html();
    $('.fav-cheap-first span').html(selected_text);
});


$('.last-price__first').on('click', function () {
    $(this).parent().addClass('last-price__req')
});


$('.clinker__sub').on('click', function (e) {
    e.stopPropagation();
});
$('.clinker__href ul li').on('click', function (e) {
    e.stopPropagation();
});

$(window).on('click', function (e) {
    let clinkeSort = $('.clinker__href ul li');
    if (e.target !== clinkeSort) {
        clinkeSort.removeClass('clinker-share__act');
    }
});



$('.cat-search__close').on('click', function () {
    $('.cat-search__mob').addClass('cat-search__none');
});


$('.add-to-cart .btn').on('click', function () {
    $(this).parent().addClass('add-act__inp');
});