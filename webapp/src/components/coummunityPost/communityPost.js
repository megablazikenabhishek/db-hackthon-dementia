import React from "react";

function communityPost() {
  return (
    <>
      <div class="tweetEntry">
        <div class="tweetEntry-content">
          <a class="tweetEntry-account-group" href="[accountURL]">
            <img
              class="tweetEntry-avatar"
              src="http://placekitten.com/200/200"
            />

            <strong class="tweetEntry-fullname">[fullname]</strong>

            <span class="tweetEntry-username">
              @<b>[username]</b>
            </span>

            <span class="tweetEntry-timestamp">- [timestamp]</span>
          </a>

          <div class="tweetEntry-text-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
            ipsum, finibus ac est sed, vestibulum condimentum neque. Sed eget
            iaculis.
          </div>
        </div>

        <div class="optionalMedia">
          <img class="optionalMedia-img" src="http://placekitten.com/500/400" />
        </div>

        <div
          class="tweetEntry-action-list"
          style="line-height:24px;color: #b1bbc3;"
        >
          <i class="fa fa-reply" style="width: 80px;"></i>
          <i class="fa fa-retweet" style="width: 80px"></i>
          <i class="fa fa-heart" style="width: 80px"></i>
        </div>
      </div>

      <div class="tweetEntry">
        <div class="tweetEntry-content">
          <a class="tweetEntry-account-group" href="[accountURL]">
            <img
              class="tweetEntry-avatar"
              src="http://placekitten.com/100/100"
            />

            <strong class="tweetEntry-fullname">[fullname]</strong>

            <span class="tweetEntry-username">
              @<b>[username]</b>
            </span>

            <span class="tweetEntry-timestamp">- [timestamp]</span>
          </a>

          <div class="tweetEntry-text-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
            ipsum, finibus ac est sed, vestibulum condimentum neque. Sed eget
            iaculis.
          </div>
        </div>

        <div class="optionalMedia" style="display:none;">
          <img
            class="optionalMedia-img"
            src="https://i.imgur.com/kOhhPAk.jpg"
          />
        </div>

        <div
          class="tweetEntry-action-list"
          style="line-height:24px;color: #b1bbc3;"
        >
          <i class="fa fa-reply" style="width: 80px;"></i>
          <i class="fa fa-retweet" style="width: 80px"></i>
          <i class="fa fa-heart" style="width: 80px"></i>
        </div>
      </div>
    </>
  );
}

export default communityPost;
