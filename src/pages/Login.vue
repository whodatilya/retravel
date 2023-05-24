<template>
  <q-layout class="login-page">
    <form class="login-form">
      <h2 v-if="isRegistration" class="login-form__title">Регистрация</h2>
      <h2 v-else class="login-form__title">Вход в аккаунт</h2>
      <div class="login-form__field">
        <label class="login-form__label" for="email">Email</label>
        <input class="login-form__input" type="email" id="email" name="email" required>
      </div>
      <div class="login-form__field">
        <label class="login-form__label" for="password">Пароль</label>
        <input class="login-form__input" type="password" id="password" name="password" required>
      </div>
      <div v-if="isRegistration" class="login-form__field">
        <label class="login-form__label" for="password">Повторите пароль</label>
        <input class="login-form__input" type="password" id="repassword" name="repassword" required>
      </div>
      <button class="login-form__submit-button" type="submit">Войти</button>
    </form>
  </q-layout>
</template>

<script>
export default {
  name: "LoginPage",
  props: {
    isRegistration: {
      default: false,
      require: true
    }
  }
}
</script>

<style scoped lang="sass">
$primary-color: #0069C0
$primary-color-dark: #6EC6FF
$text-color: #333
$font-size: 1.2rem
$font-weight-normal: 500
$font-weight-bold: 600
$border-color: #ccc
$border-radius: 0.5rem

.login-page
  display: flex
  background: #EEFFFF
  justify-content: center
  align-items: center
  height: 100vh

.login-form
  display: flex
  flex-direction: column
  align-items: center
  padding: 2rem
  border: 1px solid transparent
  border-radius: $border-radius
  &__title
    margin-bottom: 1.5rem
    font-size: 2rem
    font-weight: 700
  &__field
    display: flex
    flex-direction: column
    margin-bottom: 1.5rem
  &__label
    margin-bottom: 0.5rem
    font-size: $font-size
    font-weight: $font-weight-bold
  &__input
    padding: 0.5rem
    border: none
    border-radius: 10px
    border-bottom: 1px solid $border-color
    font-size: $font-size
    font-weight: $font-weight-normal
  &__submit-button
    padding: 0.5rem 1rem
    border: none
    border-radius: $border-radius
    background-color: $primary-color
    color: #fff
    font-size: $font-size
    font-weight: $font-weight-bold
    cursor: pointer
    transition: all 0.2s ease-in-out
  &:hover
    background-color: $primary-color-dark
    transition: all 0.4s ease-in-out
    color: white
</style>