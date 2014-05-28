<?php namespace Validators;

interface Validable {

	public function with(array $data);

	public function passes();

	public function errors();

}