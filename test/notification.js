import Vue from 'vue'
import test from 'ava';
import Notification from '../src/Notification'

test('this it renders a notification', t => {
  t.is(Notification.data().message, 'Hello World');
});