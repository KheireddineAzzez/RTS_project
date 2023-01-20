import { Meteor } from 'meteor/meteor'
import {Tempurature,Arduino_uno} from "./Collections"

Meteor.publish('Tempurature', function () {
});
Meteor.publish("Arduino_mega",function () {
	return  Arduino_uno.find({})
})
