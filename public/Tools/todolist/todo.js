(function ($) {
  "use strict";
  $(function () {
    const Storage = window.localStorage;
    var todoListItem = $(".todo-list");
    var todoListInput = $(".todo-list-input");
    document.getElementById("main-list").innerHTML =
      Storage.getItem("TODO_HTML") ||
      document.getElementById("main-list").innerHTML;
    $(".todo-list-add-btn").on("click", function (event) {
      event.preventDefault();

      Storage.setItem(
        "TODO_HTML",
        document.getElementById("main-list").innerHTML
      );
      var item = $(this).prevAll(".todo-list-input").val();

      if (item) {
        todoListItem.append(
          `<li>
    <div class='form-check'><label class='form-check-label'>
    <input class='checkbox' type='checkbox' />` +
            item +
            `<i class='input-helper'></i>
    </label></div><i class='remove mdi mdi-close-circle-outline'></i>
</li>`
        );
        todoListInput.val("");
      }
    });

    todoListItem.on("change", ".checkbox", function () {
      if ($(this).attr("checked")) {
        $(this).removeAttr("checked");
      } else {
        $(this).attr("checked", "checked");
      }

      $(this).closest("li").toggleClass("completed");
      Storage.setItem(
        "TODO_HTML",
        document.getElementById("main-list").innerHTML
      );
    });

    todoListItem.on("click", ".remove", function () {
      $(this).parent().remove();
      Storage.setItem(
        "TODO_HTML",
        document.getElementById("main-list").innerHTML
      );
    });
  });
})(jQuery);

function resetStorage() {
  const Storage = window.localStorage;
  Storage.clear();
  const temp = `<li class="completed">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="checkbox" type="checkbox" checked="" />
                          Watch some Tech With Tim videos
                          <i class="input-helper"></i
                        ></label>
                      </div>
                      <i class="remove mdi mdi-close-circle-outline"></i>
                    </li>
                    <li>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="checkbox" type="checkbox" /> Learn
                          React.js <i class="input-helper"></i
                        ></label>
                      </div>
                      <i class="remove mdi mdi-close-circle-outline"></i>
                    </li>`;
  document.getElementById("main-list").innerHTML = temp;
}
