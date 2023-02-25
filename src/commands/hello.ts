import { Discord, Slash } from "discordx";
import {
  CommandInteraction,
} from "discord.js";
@Discord()
export class Example {
  @Slash({ description: "tests" })
  testinho(interaction: CommandInteraction): void {
    interaction.reply("Hellow");
  }
}
