export const casesAPI = "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json";



export const allAPI = `
https://api.coronavirus.data.gov.uk/v1/data?
filters=areaType=overview&structure={
"areaType":"areaType",
"areaName":"areaName",
"date":"date",
"newCasesByPublishDate":"newCasesByPublishDate",
"cumCasesByPublishDate":"cumCasesByPublishDate",
"cumCasesBySpecimenDateRate":"cumCasesBySpecimenDateRate",
"cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate",
"newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate",
"hospitalCases":"hospitalCases",
"newAdmissions":"newAdmissions"
}
&format=json
`;