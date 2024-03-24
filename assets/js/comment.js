const template = document.createElement("template");

template.innerHTML = `
    <link rel='stylesheet' type='text/css' media='screen' href='./assets/css/comment.css  '>
    <div class="row" style="justify-content: center;">
    <div class="col-sm-8">   
        <form>
            <h3 class="pull-left">留言</h3>
            <div class="comment-edit">
                <fieldset>
                    <div class="row">
                        <div class="col-sm-3 col-lg-2 hidden-xs">
                            <img class="img-responsive" style="width: 100px; height: 100px; border-radius: 50%;" src="./assets/images/1111.jpg" alt="">
                        </div>
                        <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                            <textarea class="form-control" id="message" placeholder="Your message" required=""></textarea>
                        </div>
                    </div>  	
                </fieldset>
                <button type="submit" class="btn btn-normal pull-right" id="submit-btn">傳送</button>
            </div>
        </form>
        
        <h3>4 Comments</h3>
        
        <!-- COMMENT 1 - START -->
        <div class="comment-display">
            <div class="media">
                <a class="pull-left" href="#"><img class="media-object" src="./assets/images/logo.png" alt=""></a>
                <div class="media-body">
                    <h4 class="media-heading">showcase</h4>
                    <p>123456789</p>
                    <ul class="list-unstyled list-inline media-detail pull-left">
                        <li><i class="fa fa-calendar"></i>2022/8/20</li>
                        <li><i class="likes fa fa-thumbs-up"></i>13</li>
                    </ul>
                    <ul class="list-unstyled list-inline media-detail pull-right" id="reply-box">
                        <button class="btn" id="like-btn">Like</button>
                        <button class="btn" id="reply-btn">Reply</button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
`;

const nestingLimit = 3;

import class CommentBox extends HTMLElement {
  constructor() {
    super();

    this.level = this.getAttribute("level")
        ?
          parseInt(this.getAttribute("level"))
        :
          0;

    this.likeCount = 0;

    this.attachShadow({ mode: "open"});

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.commentEdit = this.shadowRoot.querySelector(".comment-edit");

    this.commentDisplay = this.shadowRoot.querySelector("comment-display");
  }

  connectedCallback() {
      this.commentEdit
          .querySelector("#submit-btn")
          .addEventListener("click", () => this.commentSubmit());
      
      this.commentDisplay
          .querySelector("#like-btn")
          .addEventListener("click", () => this.commentLike());

      if (this.level < nestingLimit) {
          this.commentDisplay
              .querySelector("#reply-btn")
              .addEventListener("click", () => this.commentReply());
      } else {
          this.commentDisplay.querySelector(".reply-btn").disabled = true;
      }

      this.commentDisplay.style.display = "none";
  }
}