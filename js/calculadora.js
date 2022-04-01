(function () {
    const list1 = document.getElementById('list_1');
    const list2 = document.getElementById('list_2');
    const onChange = (e) => {
      let result = document.getElementById('result');
      result.innerHTML = '';
      if (list1.value && list2.value)
        result.innerHTML =  "$" +( parseInt(list1.value) + parseInt(list2.value));
    };

    list1.addEventListener('change', onChange);
    list2.addEventListener('change', onChange);
  })();