import { Meteor } from 'meteor/meteor'
import { Ultra_sound_collection,Arduino_uno } from "./Collections"
Meteor.methods({
	"Save_Tempurature"(data) {
		console.log(data)
	},

	"Distance_Ultra_sound"(Distance,duration,Type){
		Arduino_uno.update({"_id":"63b6708e2d10d98acb5ccaf0"},{ $set: {"Ulra_sound":{"Distance":Distance,"Duration":duration}}})

	},
	"Get_data_ultra"(){

		return Arduino_uno.findOne({"_id":"63b6708e2d10d98acb5ccaf0"})
	},
	"Tempurature"(Temperature,Humidity,Type){
		Arduino_uno.update({"_id":"63b6708e2d10d98acb5ccaf0"},{ $set: {"Tempurature":{"Humidity":Humidity,"Tempurature":Temperature}}})

	}
});
