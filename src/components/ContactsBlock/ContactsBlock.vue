<script setup lang="ts">
import GithubIcon from '@/assets/images/icons/github.svg'
import MailIcon from '@/assets/images/icons/mail.svg'
import TelegramIcon from '@/assets/images/icons/send.svg'
import ClipboardIcon from '@/assets/images/icons/clipboard.svg'
</script>

<template>
  <div class="contacts-block">
    <a
      href="https://t.me/flockast"
      class="contact-item"
      target="_blank"
    >
      <span class="contact-item__icon">
        <TelegramIcon />
      </span>
      <span class="contact-item__text">
        telegram
      </span>
    </a>
    <a
      href="mailto:flockast@gmail.com"
      class="contact-item"
      target="_blank"
    >
      <span class="contact-item__icon">
        <MailIcon />
      </span>
      <span class="contact-item__text">
        flockast@gmail.com
      </span>
    </a>
    <a
      href="https://github.com/flockast"
      class="contact-item"
      target="_blank"
    >
      <span class="contact-item__icon">
        <GithubIcon />
      </span>
      <span class="contact-item__text">
        github
      </span>
    </a>
    <a
      href="https://career.habr.com/flockast"
      class="contact-item"
      target="_blank"
    >
      <span class="contact-item__icon">
        <ClipboardIcon />
      </span>
      <span class="contact-item__text">
        cv
      </span>
    </a>
  </div>
</template>

<style lang="scss">
@import "contacts-block";
</style>
