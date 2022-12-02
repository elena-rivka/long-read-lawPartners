var maskMap = {
        1: "+43(nnn) nnn-nnnnn",
        2: "+355(nnn) nnn-nnn",
        3: "+376 nnn-nnn",
        4: "+32(nnn) nnn-nnn",
        5: "+359(nnn) nnn-nnn",
        6: "+387 nn-nnn-nnn",
        7: "+44 nn-nnnn-nnnnn",
        8: "+36(nnn) nnn-nnn",
        9: "+49(nnn) nnn-nnnnn",
        10: "+30(nnn) nnn-nnnn",
        11: "+45 nn-nn-nn-nn",
        12: "+353(nnn) nnn-nnn",
        13: "+354 nnn-nnnn",
        14: "+34(nnn) nnn-nnn",
        15: "+39(nnn) nnnn-nnn",
        16: "+371 nn-nnn-nnn",
        17: "+370(nnn) nn-nnn",
        18: "+423 nnn-nn-nn",
        19: "+352(nnn) nnn-nnn",
        20: "+356 nnnn-nnnn",
        21: "+373 nnnn-nnnn",
        22: "+377 nn-nnn-nnn",
        23: "+31 nn-nnn-nnnn",
        24: "+47(nnn) nn-nnn",
        25: "+357 nn-nnn-nnn",
        26: "+48(nnn) nnn-nnn",
        27: "+351 nn-nnn-nnnn",
        28: "+40 nn-nnn-nnnn",
        29: "+389 nn-nnn-nnn",
        30: "+381 nn-nnn-nnnn",
        31: "+421(nnn) nnn-nnn",
        32: "+386 nn-nnn-nnn",
        33: "+358 nnn-nnnnnnn",
        34: "+33(nnn) nnn-nnnn",
        35: "+385 nn-nnn-nnnn",
        36: "+382 nn-nnn-nnn",
        37: "+420(nnn) nnn-nnn",
        38: "+41 nn-nnn-nnnn",
        39: "+46 nn-nnn-nnnn",
        40: "+372 nnnn-nnnn",
        41: "+972 nnn-nnn-nnnn",
        42: "+995(nnn) nnn-nnn",
        43: "+90(nnn) nnn-nnnnn"
      };
      
      $("select").change(function () {
        var phoneMask = maskMap[this.value];
        $("#user-tel").mask(phoneMask);
        $("#user-tel").val("").focus();
      });

      $("select").change(function () {
        var phoneMask = maskMap[this.value];
        $("#forex-tel").mask(phoneMask);
        $("#forex-tel").val("").focus();
      });

      $("select").change(function () {
        var phoneMask = maskMap[this.value];
        $("#any-tel").mask(phoneMask);
        $("#any-tel").val("").focus();
      });

      $("select").change(function () {
        var phoneMask = maskMap[this.value];
        $("#bit-tel").mask(phoneMask);
        $("#bit-tel").val("").focus();
      });

      $("select").change(function () {
        var phoneMask = maskMap[this.value];
        $("#victoria-tel").mask(phoneMask);
        $("#victoria-tel").val("").focus();
      });

      $("select").change(function () {
        var phoneMask = maskMap[this.value];
        $("#oskars-tel").mask(phoneMask);
        $("#oskars-tel").val("").focus();
      });

      $("select").change(function () {
        var phoneMask = maskMap[this.value];
        $("#kazimir-tel").mask(phoneMask);
        $("#kazimir-tel").val("").focus();
      });