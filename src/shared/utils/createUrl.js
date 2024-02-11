import { CONFIG } from "../config/index";

export class HeroUrlCreator {
	constructor(
		heroImgBase,
		heroPortraitBase,
		heroVideoBase,
		skillImgBase,
		skillVideoBase
	) {
		this.heroImgBase = heroImgBase;
		this.heroPortraitBase = heroPortraitBase;
		this.heroVideoBase = heroVideoBase;
		this.skillImgBase = skillImgBase;
		this.skillVideoBase = skillVideoBase;
	}

	// Словарь для замен имен героев
	heroNameReplacements = {
		wraith_king: "skeleton_king",
		zeus: "zuus",
		windranger: "windrunner",
		vengeful_spirit: "vengefulspirit",
		clockwerk: "rattletrap",
		doom: "doom_bringer",
		io: "wisp",
		magnus: "magnataur",
		ancient_apparitwispn: "ancient_apparition",
		centaur_warrunner: "centaur",
		legwispn_commander: "legion_commander",
		lwispn: "lion",
		necrophos: "necrolyte",
		outworld_destroyer: "obsidian_destroyer",
		queen_of_pain: "queenofpain",
		shadow_fiend: "nevermore",
		timbersaw: "shredder",
		treant_protector: "treant",
		underlord: "abyssal_underlord",
		lifestealer: "life_stealer",
		"nature's_prophet": "furion",
		sand_king: "sandking",
	};

	// Функция для форматирования строк
	formatString(str) {
		return str.toLowerCase().split(" ").join("_").split("-").join("");
	}

	// Функция для замены имен героев согласно словарю
	replaceHeroName(name) {
		const formattedName = this.formatString(name);
		return this.heroNameReplacements[formattedName] || formattedName;
	}

	// Метод для создания URL
	createUrl(params) {
		if (params.type === "heroImg") {
			return `${this.heroImgBase}/${this.changeHeroImg(
				params.heroName,
				"png"
			)}`;
		} else if (params.type === "heroPortrait") {
			return `${this.heroPortraitBase}/${this.changeHeroNamePortrait(
				params.heroName,
				"png"
			)}`;
		} else if (params.type === "heroVideo") {
			return `${this.heroVideoBase}/${this.changeHeroVideo(
				params.heroName,
				params.formatVideo
			)}`;
		} else if (params.type === "abilityPicture") {
			return `${this.skillImgBase}/${this.changeSkillImg(
				params.heroName,
				params.abilityName,
				"png"
			)}`;
		} else if (params.type === "abilityVideo") {
			return `${this.skillVideoBase}/${this.changeSkillVideo(
				params.heroName,
				params.abilityName,
				params.formatVideo
			)}`;
		} else if (params.type === "abilityShardVideo") {
			return `${this.skillVideoBase}/${this.changeSkillShardVideo(
				params.heroName,
				params.formatVideo
			)}`;
		} else if (params.type === "abilityAganimVideo") {
			return `${this.skillVideoBase}/${this.changeSkillAganimVideo(
				params.heroName,
				params.formatVideo
			)}`;
		} else {
			throw new Error("Invalid type provided");
		}
	}

	// Методы для изменения URL изображений и видео
	changeHeroImg(name, format) {
		this.validateInputs(name, format);
		const formattedName = this.replaceHeroName(this.formatString(name));
		const formattedFormat = format.toLowerCase();
		return `${
			formattedName === "sandking" ? "sand_king" : formattedName
		}.${formattedFormat}`;
	}

	changeHeroNamePortrait(name, format) {
		this.validateInputs(name, format);
		const formattedName = this.replaceHeroName(this.formatString(name));
		const formattedFormat = format.toLowerCase();
		return `${
			formattedName === "sandking" ? "sand_king" : formattedName
		}.${formattedFormat}`;
	}

	changeHeroVideo(name, format) {
		this.validateInputs(name, format);
		const formattedName = this.replaceHeroName(this.formatString(name))
			.split("'")
			.join("")
			.split(".")
			.join("");
		const formattedFormat = format.toLowerCase();
		return `${
			formattedName === "sandking" ? "sand_king" : formattedName
		}.${formattedFormat}`;
	}

	changeSkillImg(heroName, abilityName, format) {
		this.validateInputs(heroName, abilityName, format);
		const formattedHeroName = this.replaceHeroName(this.formatString(heroName));
		const formattedAbilityName = this.formatString(abilityName)
			.split(`${formattedHeroName}_`)
			.join("");
		const formattedFormat = format.toLowerCase();
		return `${formattedHeroName}_${
			formattedAbilityName === "strike" ? "viper_strike" : formattedAbilityName
		}.${formattedFormat}`;
	}

	changeSkillVideo(heroName, abilityName, format) {
		this.validateInputs(heroName, abilityName, format);
		const formattedHeroName = this.replaceHeroName(this.formatString(heroName));
		const formattedAbilityName = this.formatString(abilityName)
			.split(`${formattedHeroName}_`)
			.join("")
			.split("'")
			.join("")
			.split(".")
			.join("");
		const formattedFormat = format.toLowerCase();
		return `${
			formattedHeroName === "sandking" ? "sand_king" : formattedHeroName
		}/${formattedHeroName}_${formattedAbilityName}.${formattedFormat}`;
	}

	changeSkillShardVideo(heroName, format) {
		this.validateInputs(heroName, format);
		const formattedHeroName = this.replaceHeroName(this.formatString(heroName));
		const formattedFormat = format.toLowerCase();
		return `${
			formattedHeroName === "sandking" ? "sand_king" : formattedHeroName
		}/${formattedHeroName}_aghanims_shard.${formattedFormat}`;
	}

	changeSkillAganimVideo(heroName, format) {
		this.validateInputs(heroName, format);
		const formattedHeroName = this.replaceHeroName(this.formatString(heroName));
		const formattedFormat = format.toLowerCase();
		return `${
			formattedHeroName === "sandking" ? "sand_king" : formattedHeroName
		}/${formattedHeroName}_aghanims_scepter.${formattedFormat}`;
	}

	// Помощник для проверки входных данных
	validateInputs(...inputs) {
		inputs.forEach((input) => {
			if (typeof input !== "string") {
				throw new Error("All arguments must be strings");
			}
		});
	}
}

export const mediaLinks = new HeroUrlCreator(
	`${CONFIG.IMG_URL}/heroes`,
	CONFIG.HERO_PORTRET_URL,
	CONFIG.HERO_VIDEO_URL,
	CONFIG.ABILITY_IMG_URL,
	CONFIG.ABILITY_VIDEO_URL
);
