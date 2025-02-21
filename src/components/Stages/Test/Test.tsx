import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import './Test.scss'
import { steps as data, resultAnswers } from "./data";
import { findMostFrequentElement } from "../../../shared/utils/arr";
import { ResultCard } from "./ResultCard/ResultCard";


export const Test = () => {
	const [steps] = useState(data)
	const [activeStep, setActiveStep] = useState(0);

	const [results, setResults] = useState(resultAnswers);

	const [isAllVariants, setIsAllVariants] = useState(false);

	const [form, setForm] = useState(() => data.reduce((acc, item) => {
		//@ts-expect-error fix-later
		acc[item.name] = '';
		return acc;
	}, {}));

	const calcWinner = () => {
		const resCopy = [...results];
		const vars = [] as unknown[]

		Object.keys(form).map((key) => {
			//@ts-expect-error fix-later
			const rights = steps.find(_item => _item.name === key)!.variants.find(_item => _item.value === form[key])?.rights
			rights?.map(_item => vars.push(_item))
		})

		const winner = findMostFrequentElement(vars)

		resCopy.forEach(item => {
			if(item.code === winner) {
				item.winner = true
			}
		})
		
		setResults(resCopy)
	}

	const handleNext = () => {

		if(activeStep === steps.length - 1) {
			calcWinner()
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
		setIsAllVariants(false)
		setForm(() => data.reduce((acc, item) => {
			//@ts-expect-error fix-later
			acc[item.name] = '';
			return acc;
		}, {}))
		setResults(resultAnswers)
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
		setForm(prevState => ({
			...prevState,
			[key]: (event.target as HTMLInputElement).value
		}))
	};

	const handleAllResults = () => {
		setIsAllVariants(!isAllVariants)
	}

	return (
		<>
		<Box sx={{ maxWidth: 400 }} >
			<div className="title-descr" style={{marginBottom: '20px'}}>Пройди тест на Бойчика</div>
			<Stepper activeStep={activeStep} orientation="vertical" >
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							className="stepper-cust"
							optional={
								index === steps.length - 1 ? (
									<Typography variant="caption">Последний вопрос</Typography>
								) : null
							}
						>
							{step.label}
						</StepLabel>
						<StepContent>
							<Typography>{step.description}</Typography>
							<RadioGroup
								aria-labelledby="demo-controlled-radio-buttons-group"
								name="controlled-radio-buttons-group"
								//@ts-expect-error fix-later
								value={form[step.name]}
								onChange={(e) => handleChange(e, step.name)}
							>
								{step.variants.map((item, index) => (
									<FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />
								))}
							</RadioGroup>
							<Box sx={{ mb: 2 }}>
								<Button
									variant="contained"
									onClick={handleNext}
									sx={{ mt: 1, mr: 1 }}
								>
									{index === steps.length - 1 ? "Завершить" : "Далее"}
								</Button>
								<Button
									disabled={index === 0}
									onClick={handleBack}
									sx={{ mt: 1, mr: 1 }}
								>
									Назад
								</Button>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper  elevation={0} sx={{ p: 3 }}>
					<Typography>Тест пройден!</Typography>
					<Typography>Твой результат... </Typography>
					<Typography marginTop={2}>{results.find(item => item.winner)?.label}</Typography>
					<Typography>{results.find(item => item.winner)?.description}</Typography>
					<div className="img-result-block">
						<img src={results.find(item => item.winner)?.img} alt="" />
					</div>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						Сбросить
					</Button>
					<Button onClick={handleAllResults} sx={{ mt: 1, mr: 1 }}>
						{isAllVariants ? 'Скрыть варианты' : 'Посмотреть все варианты'}
					</Button>
				</Paper>
			)}
			
		</Box>
		{
			isAllVariants && (
				<div className="results-container">
					{results.map((item, index) => (<ResultCard key={index} card={item}/>))}
				</div>
			)
			
		}
		</>
	);
};
