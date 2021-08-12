$(document).ready(function(){
   let loader = $('#loader')
   $('.order-btn').click(function(){
      $('.error-text').hide();
      
      let name = $('#name');
      name.css('border-color', 'rgb(185, 145, 80)');
      let adress = $('#adress');
      adress.css('border-color', 'rgb(185, 145, 80)');
      let phone = $('#phone');
      phone.css('border-color', 'rgb(185, 145, 80)');
      let hasError = false;

      if (!name.val()){
         name.css('border-color', 'red');
         name.siblings('.error-text').show();
         hasError = true;
      }
      if (!adress.val()){
         adress.css('border-color', 'red');
         adress.siblings('.error-text').show();
         hasError = true;
      }
      if (!phone.val()){
         phone.css('border-color', 'red');
         phone.siblings('.error-text').show();
         hasError = true;
      }
      if (!name.val() || !adress.val() || !phone.val()) {
         return
      }
      loader.css('display', 'flex')
      $.ajax({
         method: "POST",
         url: 'https://itlogia.ru/test/checkout',
         data: {name: name.val(), adress: adress.val(), phone: phone.val() }

      
      })
      .done(function(message) {
         loader.hide();
         if (message.success){
            $('.order-form').hide();
            $('.order-succes').css('display', 'flex');
         }else {
            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!')
         }

      })

   })



 });