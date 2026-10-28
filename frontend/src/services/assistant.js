import { newsEn, newsRw } from "../data/news";
import { getEvergreenProjects } from "../data/projects";
import { rootsAndShootsLinks } from "../data/rootsAndShootsLinks";

export function answerAssistantQuestion(question, language = "en") {
  const isKinyarwanda = language === "rw";
  const normalizedQuestion = question.toLocaleLowerCase();
  const projects = getEvergreenProjects(language);
  const news = isKinyarwanda ? newsRw : newsEn;

  if (/\b(project|projects|umushinga|imishinga)\b/.test(normalizedQuestion)) {
    return {
      answer: isKinyarwanda
        ? `Dore projects za Evergreen:\n${projects.map(({ title }) => `• ${title}`).join("\n")}`
        : `Here are Evergreen's projects:\n${projects.map(({ title }) => `• ${title}`).join("\n")}`,
      source: isKinyarwanda ? "Imishinga" : "Projects",
      actions: [{ label: isKinyarwanda ? "Reba imishinga" : "See projects", href: "/projects" }],
    };
  }

  if (/\b(news|story|stories|amakuru|inkuru)\b/.test(normalizedQuestion)) {
    return {
      answer: isKinyarwanda
        ? `Dore amakuru ya vuba ya Evergreen:\n${news.map(({ title }) => `• ${title}`).join("\n")}`
        : `Here are Evergreen's latest stories:\n${news.map(({ title }) => `• ${title}`).join("\n")}`,
      source: isKinyarwanda ? "Amakuru" : "News",
      actions: [{ label: isKinyarwanda ? "Soma inkuru" : "Read stories", href: "/#news" }],
    };
  }

  if (/\b(volunteer|volunteering|kwiyandikisha|kwitanga|umukorerabushake)\b/.test(normalizedQuestion)) {
    return {
      answer: isKinyarwanda
        ? "Wiyandikishe muri volunteer team kuri website ya Roots & Shoots Rwanda."
        : "Join the volunteer team on the Roots & Shoots Rwanda website.",
      source: isKinyarwanda ? "Abakorerabushake" : "Volunteering",
      actions: [{
        label: isKinyarwanda ? "Jya mu itsinda ry'abakorerabushake" : "Join our volunteer team",
        href: rootsAndShootsLinks.volunteer,
      }],
    };
  }

  if (/\b(contact|message|email|ubutumwa|wandikire|kubaza)\b/.test(normalizedQuestion)) {
    return {
      answer: isKinyarwanda
        ? "Kohereza ubutumwa, jya kuri contact page ya Roots & Shoots Rwanda."
        : "To send a message, visit the Roots & Shoots Rwanda contact page.",
      source: isKinyarwanda ? "Twandikire" : "Contact",
      actions: [{
        label: isKinyarwanda ? "Twandikire" : "Send us a message",
        href: rootsAndShootsLinks.contact,
      }],
    };
  }

  if (/\b(team|staff|itsinda|abakozi)\b/.test(normalizedQuestion)) {
    return {
      answer: isKinyarwanda
        ? "Reba abagize ikipe ya Evergreen kuri /team."
        : "Meet the Evergreen team on /team.",
      source: isKinyarwanda ? "Ikipe ya Evergreen" : "Evergreen team",
      actions: [{ label: isKinyarwanda ? "Menya ikipe" : "Meet the team", href: "/team" }],
    };
  }

  if (/\b(work|activities|what|ikora|ibikorwa|ibidukikije)\b/.test(normalizedQuestion)) {
    return {
      answer: isKinyarwanda
        ? "Evergreen ikora ibikorwa byo gutera ibiti, kubungabunga ibidukikije n'inyamaswa, kurengera amazi, gucunga imyanda no kwigisha ibidukikije."
        : "Evergreen plants trees, protects wildlife and water, manages waste, and teaches communities about the environment.",
      source: isKinyarwanda ? "Ibikorwa byacu" : "Our work",
      actions: [{ label: isKinyarwanda ? "Ibikorwa byacu" : "What we do", href: "/#focus" }],
    };
  }

  return {
    answer: isKinyarwanda
      ? "Sinabonye igisubizo mu makuru ya Evergreen mfite. Gerageza kubaza kuri projects, news, ibikorwa cyangwa kwiyandikisha nka volunteer."
      : "I couldn't find an answer in Evergreen's available information. Try asking about projects, news, our work, or volunteering.",
    source: null,
    actions: [{
      label: isKinyarwanda ? "Twandikire" : "Send us a message",
      href: rootsAndShootsLinks.contact,
    }],
  };
}
