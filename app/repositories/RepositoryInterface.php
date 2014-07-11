<?php

interface RepositoryInterface
{

    public function all();

    public function get($id);

    public function find($id);

    public function findOrFail($id);

}